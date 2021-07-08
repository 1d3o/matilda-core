import React, { useContext, useMemo, useState } from 'react'
import { notification, Spin } from 'antd'
import { MatildaContext } from '../index'

/**
 * @function MatildaRequest
 * @param {*} props
 * @returns 
 */
export function MatildaRequest (props) {
  const { request: { running } } = props

  if (!running) return null

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin />
    </div>
  )
}

/***************************************************************************************************** */

/**
 * @function useMatildaRequest
 * @param {*} configProps 
 * @returns 
 */
export function useMatildaRequest (configProps = {}) {
  const { getRoute, getTranslation } = useContext(MatildaContext)
  const [running, setRunning] = useState(false)

  const config = useMemo(() => {
    return Object.assign({
      manageError: true,
      defaultErrorMessage: getTranslation('messages.general_error')
    }, configProps)
  }, [configProps])

  const getRouteObject = (routeKey) => {
    const routeObject = getRoute(routeKey)
    if (routeObject) return routeObject

    if (typeof routeKey == 'object') {
      return routeKey
    } else if (typeof routeKey == 'string') {
      return { path: routeKey, method: 'GET' }
    } else {
      throw new Error('routeKey not valid. It should be a string or an object with keys :path and :method.')
    }
  }

  const send = (routeKey, params) => {
    if (running) return new Promise((resolve) => resolve(null)) // avoid multiple execution of same request

    setRunning(true)
    const routeObject = getRouteObject(routeKey)

    let url = routeObject.path
    if (routeObject.method == 'GET') {
      url = `${url}?`
      Object.entries(params).map(([key, value]) => url = `${url}${key}=${value}&`)
    }

    let fetchOptions = {
      method: routeObject.method,
      body: routeObject.method == 'GET' ? null : JSON.stringify(params),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    }

    return new Promise((resolve, reject) => {
      const manageResponse = (response) => {
        if (config.manageError && !response.result) {
          let errorMessage = config.defaultErrorMessage
          if (response.errors && response.errors.length > 0) errorMessage = response.errors[0].message
          notification['error']({ message: errorMessage })
        }

        setRunning(false)
        resolve(response)
      }

      fetch(url, fetchOptions).then((response) => {
        return response.json()
      }).then((response) => {
        return manageResponse(response)
      }).catch((error) => {
        console.error(error)
        const response = { result: false, errors: [{ message: config.defaultErrorMessage }] }
        return manageResponse(response)
      })
    })
  }

  return { config, running, send, getRouteObject }
}