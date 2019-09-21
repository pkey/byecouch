import React from 'react'
import { Form, Input, Icon, Button, Card } from 'antd';

let id = 0;

class DynamicFieldSet extends React.Component<any> {
// @ts-ignore
  remove = k => {
    // @ts-ignore
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
            // @ts-ignore
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
          // @ts-ignore
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };
    // @ts-ignore
  handleSubmit = e => {
    e.preventDefault();
        // @ts-ignore
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
            // @ts-ignore
        console.log('Merged values:', keys.map(key => names[key]));
        console.log(names)
        // @ts-ignore
        this.props.setLocations(names)
      }
    });
  };

  render() {
          // @ts-ignore
    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
        // @ts-ignore
    const formItems = keys.map((k, index) => (
      <Form.Item
      style={{width: "100%"}}
        label={index === 0 ? '' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Iveskite adresą",
            },
          ],
        })(<Input placeholder="Adresas" style={{ width: '90%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <Form style={{marginTop: 40}} onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item >
          <Button type="dashed" onClick={this.add} style={{marginRight: 20  }}>
            <Icon type="plus" /> Pridėti
          </Button>
          <Button type="primary" htmlType="submit">
            Išsaugoti
          </Button>
        </Form.Item> 
      </Form>
    );
  }
}

export default Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);