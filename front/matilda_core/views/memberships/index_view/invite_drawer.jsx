import React, { useContext, useEffect } from 'react'
import { Form, Input, Button, Alert, Space } from 'antd'
import { MatildaContext } from 'matilda_core'
import { MatildaForm, useMatildaForm } from 'matilda_core/components/MatildaForm'

export default function InviteDrawer (props) {
  const { pages } = props
  const { getTranslation } = useContext(MatildaContext)
  const form = useMatildaForm('matilda_core.memberships_invitation_action')

  console.log(props)

  useEffect(() => {
    if (form.response && form.response.result) {
      pages.closeDrawer()
    }
  }, [form.response])

  return (
    <Space direction="vertical" size='large' style={{ width: '100%' }}>
      <Alert
        message={getTranslation('matilda_core.helps.invitation_user_guide')}
        type="info"
      />

      <MatildaForm form={form}>
        <Form.Item
          name="name"
          label={getTranslation('matilda_core.labels.name')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="surname"
          label={getTranslation('matilda_core.labels.surname')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label={getTranslation('matilda_core.labels.email')}
          rules={[{ required: true }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            {getTranslation('matilda_core.cta.confirm')}
          </Button>
        </Form.Item>
      </MatildaForm>
    </Space>
  )
}