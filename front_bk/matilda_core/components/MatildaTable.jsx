import React, { useMemo, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useMatildaRequest } from './MatildaRequest'

/**
 * @function MatildaTable
 * @param {*} props 
 */
export function MatildaTable (props) {
  const { table } = props
  const { config, loading, data, columns } = table
  const dataTable = columns.length > 0 ? calculateColumnsWidth(columns, data, 300) : { width: 1024 }

  let rowSelection = null
  if(config.selection == 'checkbox'){
    rowSelection = {type: 'checkbox', selectedRows: table.selectedRows, onChange: table.onChangeSelectedRows}
  } else if(config.selection == 'radio'){
    rowSelection = {type: 'radio', selectedRows: table.selectedRows, onChange: table.onChangeSelectedRows}
  }

  return (
    <Table
      columns={columns}
      loading={loading}
      dataSource={data}
      paginated={!!config.pagination}
      pagination={table.pagination}
      rowSelection={rowSelection}
      onChange={table.onTableChange}
      scroll={{ x: dataTable.tableWidth, y: config.maxHeight || null }}
      bordered
      sticky
    />
  )
}

MatildaTable.propTypes = {
  table: PropTypes.shape({
    config: PropTypes.shape({
      columns: PropTypes.array.isRequired,
      data: PropTypes.array,
      route: PropTypes.string,
      routeDataParser: PropTypes.func,
      routePaginationParser: PropTypes.func,
      pagination: PropTypes.any
    }).isRequired
  }).isRequired
}

/***************************************************************************************************** */

/**
 * @function useMatildaTable
 * @param {*} configProps
 */
export function useMatildaTable (configProps = {}) {
  const request = useMatildaRequest()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState(configProps.pagination)
  const [selectedRows, setSelectedRows] = useState([])
  const searchInputRef = useRef()

  const config = useMemo(() => {
    return Object.assign({
      columns: [],
      data: [],
      route: null,
      routeExtraParams: {},
      routeDataParser: () => [],
      routePaginationParser: null,
      pagination: false,
      selection: '',
      maxHeight: null,
    }, configProps)
  }, [configProps])

  const columns = useMemo(() => {
    return config.columns.map((column) => {
      const { dataIndex } = column

      if (column.search) {
        column = Object.assign(column, {
          filterDropdown: (params) => renderFiltersDropdown(params, dataIndex),
          filterIcon: (params) => renderFilterIcon(params, dataIndex),
          onFilter: (value, record) => record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => searchInputRef.current.select(), 100)
            }
          }
        })
      }

      return column
    })
  }, [config.columns])

  // gestisco il primo caricamento di dati della tabella
  useEffect(() => {
    if (config.route) {
      loadData()
    } else {
      setData(config.data)
      setLoading(false)
    }
  }, [])

  /**
   * @function loadData
   * @param {*} pagination 
   * @param {*} sort 
   * @param {*} filters
   */
  const loadData = (pagination = {}, sort = {}, filters = {}) => {
    setLoading(true)

    // definisco parametri richiesta
    let params = {
      page: pagination?.current || 1,
      per_page: pagination?.pageSize || 25,
      sort_field: sort.field || '',
      sort_order: {ascend:'ASC',descend:'DESC'}[sort.order] || 'ASC',
      filters_keys: Object.keys(filters).join(','),
      filters_values: Object.values(filters).join(',')
    }
    const finalParams =  Object.assign(params, config.routeExtraParams)

    // invio richiesta
    request.send(config.route, finalParams).then((response) => {
      if (!response.result) return

      // gestisco dati paginazione da risposta (se la paginazione e attiva)
      if (config.pagination) {
        if (config.routePaginationParser) { // caso in cui la risposta viene parsata dall'esterno
          setPagination(config.routePaginationParser(response))
        } else if (response.payload?.params?.pagination) { // caso in cui la risposta viene parsata su standard matilda
          setPagination({ total: response.payload.params.pagination.total_items, current: response.payload.params.pagination.page, pageSize: response.payload.params.pagination.per_page })
        } else { // altri casi
          setPagination(config.pagination)
        }
      }

      // salvo dati arrivati da risposta api
      setData(config.routeDataParser(response))

      // disattivo loading
      setLoading(false)
    })
  }

  /**
   * @function onTableChange
   * @param {*} pagination 
   * @param {*} sort 
   * @param {*} filter 
   */
  const onTableChange = (pagination, filters, sort) => {
    loadData(pagination, sort, filters)
  }

  /**
   * @function onSearchChange
   * @param {*} selectedKeys 
   * @param {*} confirm 
   * @param {*} dataIndex 
   */
  const onSearchChange = (selectedKeys, confirm, dataIndex) => {
    confirm()
  }

  /**
   * @function onSearchReset
   * @param {*} clearFilters 
   */
  const onSearchReset = (clearFilters) => {
    clearFilters()
  }

  /**
   * @function onChangeSelectedRows
   * @param 
   * @returns 
   */
  const onChangeSelectedRows = (selectedRows) => {
    setSelectedRows(selectedRows)
  }

  /**
   * @function resetSelectedRows
   * @param 
   * @returns 
   */
  const resetSelectedRows = () => {
    setSelectedRows([])
  }

  /**
   * @function replaceSelectedRows
   * @param 
   * @returns 
   */
   const replaceSelectedRows = (newRows) => {
    setSelectedRows(newRows)
  }

  const renderFiltersDropdown = (params, dataIndex) => {
    const { setSelectedKeys, selectedKeys, confirm, clearFilters } = params

    return (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInputRef}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => onSearchChange(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => onSearchChange(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => onSearchReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    )
  }

  const renderFilterIcon = (filtered, dataIndex) => {
    return (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    )
  }

  return { config, loading, data, columns, pagination, selectedRows, loadData, replaceSelectedRows, resetSelectedRows, onTableChange, onChangeSelectedRows }
}

// CALCOLO AUTOMATICO WIDTH TABLE
// https://codesandbox.io/s/wonderful-tree-ukyy5?fontsize=14&view=preview&file=/src/index.js:544-565
/********************************************************************************************************** */

/**
 * This function calculate the width of a string based on its length
 * @param {String} text
 * @param {String} font
 */
 const getTextWidth = (text, font = "14px -apple-system") => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return Math.round(metrics.width + 80);
};

/**
 * This function calculates the width of each column based in all CELL VALUES
 * @param {Array} columns
 * @param {Array} source
 * @param {Number} maxWidthPerCell
 */
const calculateColumnsWidth = (
  columns,
  source,
  maxWidthPerCell = 500
) => {
  const columnsParsed = JSON.parse(JSON.stringify(columns));

  // First we calculate the width for each column
  // The column width is based on its string length

  const columnsWithWidth = columnsParsed.map(column =>
    Object.assign(column, {
      width: getTextWidth(column.title)
    })
  );

  // Since we have a minimum width (column's width already calculated),
  // now we are going to verify if the cell value is bigger
  // than the column width which is already set

  source.map(entry => {
    columnsWithWidth.map((column, indexColumn) => {
      const columnWidth = column.width;
      const cellValue = Object.values(entry)[indexColumn];

      // Get the string width based on chars length
      let cellWidth = getTextWidth(cellValue);

      // Verify if the cell value is smaller than column's width
      if (cellWidth < columnWidth) cellWidth = columnWidth;

      // Verify if the cell value width is bigger than our max width flag
      if (cellWidth > maxWidthPerCell) cellWidth = maxWidthPerCell;

      // Update the column width
      columnsWithWidth[indexColumn].width = cellWidth;
    });
  });

  // Sum of all columns width to determine the table max width
  const tableWidth = columnsWithWidth
    .map(column => column.width)
    .reduce((a, b) => {
      return a + b;
    });

  return {
    columns: columnsWithWidth,
    source,
    tableWidth
  };
};