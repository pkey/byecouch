import { Button, Form, Input } from 'antd';
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

class DynamicFieldSet extends React.Component<any> {
  state = {
    addreses: []
  };

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
      keys: keys.filter(key => key !== k)
    });
  };

  add = () => {
    // @ts-ignore
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: keys.concat(keys[keys.length - 1] + 1)
    });
  };

  // @ts-ignore
  handleSubmit = e => {
    e.preventDefault();
    // @ts-ignore
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names, coordinates } = values;
        console.log('Received values of form: ', values);
        // @ts-ignore
        console.log('Merged values:', keys.map(key => names[key]));
        console.log(names);

        const parsedCoordinates = coordinates.map(({ lat, lng }) => ({
          name: "Selected location",
          latitude: lat,
          longitude: lng
        }))

        console.log(parsedCoordinates)
        this.props.setLocations(parsedCoordinates)
      }
    });
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address, index) => {
    const names = this.props.form.getFieldValue('names');
    names[index] = address;

    this.props.form.setFieldsValue({
      names: this.props.form.setFieldsValue({ names: names })
    });

    //Set coordinates
    const coordinates = this.props.form.getFieldValue('coordinates');

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        coordinates[index] = latLng
        this.props.form.setFieldsValue({
          coordinates
        });
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const placeholders = {
      0: 'Namų adresas',
      1: 'Darbo adresas'
    };

    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator('keys', { initialValue: [0, 1] });
    getFieldDecorator('coordinates', { initialValue: [] });

    const keys = getFieldValue('keys');
    // @ts-ignore
    const formItems = keys.map((k, index) => {
      const values = getFieldValue('names');
      return (
        <PlacesAutocomplete
          value={values ? values[k] : ''}
          onChange={this.handleChange}
          onSelect={value => this.handleSelect(value, k)}
          debounce={1000}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              {getFieldDecorator(`names[${k}]`, {
                validateTrigger: ['onChange', 'onBlur'],

              })(
                <Input
                  {...getInputProps({
                    placeholder: placeholders[k],
                    className: 'location-search-input'
                  })}
                  style={{ width: '90%', margin: '10px 8px 10px 0px' }}
                />
              )}
              <div className="autocomplete-dropdown-container">
                {loading && <div>Kraunasi...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    });

    return (
      <Form style={{ marginTop: 10 }} onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item>
          {/* <Button type="dashed" onClick={this.add} style={{ marginRight: 20 }}>
            <Icon type="plus" /> Pridėti
          </Button> */}
          <Button type="primary" htmlType="submit">
            Išsaugoti
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);
