import React from 'react';

function _makeOptions(items) {
  return items.map((x) => {
    return (
      <option key={x.value} value={x.value}>{x.text}</option>
    )
  });
}

class FormSelect extends React.Component {
  render() {
    const options = _makeOptions(this.props.items || []);
    return (
      <div className='FormSelectContainer'>
        <select className='FormSelect' value={this.props.value} onChange={this.handleChange.bind(this)}>
          {options}
        </select>
      </div>
    );
  }
  handleChange(evt) {
    const selectValue = evt.target.value;
    if (this.props.onChange)
      this.props.onChange(this, selectValue);
  }
}

export default FormSelect;
