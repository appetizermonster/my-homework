import React from 'react';

function _makeIconElement(icon) {
  if (!icon)
    return null;
  return <i className={`fa ${icon}`} />;
}

class FormRadio extends React.Component {
  render() {
    return (
      <form>
        {this.makeRadios()}
      </form>
    );
  }
  makeRadios() {
    const items = this.props.items;
    const value = this.props.value;
    return items.map((item) => {
      const isSelected = (item.value === value);
      const icon = _makeIconElement(item.icon);
      return (
        <label className='FormRadioItem' key={item.value}>
          <input
            type='radio'
            value={item.value}
            checked={isSelected}
            onChange={this.handleChange.bind(this)} />
          {icon}{item.text}
        </label>
      )
    });
  }
  handleChange(evt) {
    const value = evt.target.value;
    if (this.props.onChange)
      this.props.onChange(this, value);
  }
}

export default FormRadio;
