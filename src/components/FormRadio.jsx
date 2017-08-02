import React from 'react';

function _makeIconElement(icon) {
  if (!icon)
    return null;
  return <i className={`fa ${icon}`} />;
}

class FormRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    };
  }
  render() {
    return (
      <form>
        {this.makeRadios()}
      </form>
    );
  }
  makeRadios() {
    const selectedValue = this.state.selected;
    return this.props.items.map((x) => {
      const isSelected = (x.value === selectedValue);
      const icon = _makeIconElement(x.icon);
      return (
        <label className='FormRadioItem' key={x.value}>
          <input
            type='radio'
            value={x.value}
            checked={isSelected}
            onChange={this
              .handleRadioChange
              .bind(this)} />
          {icon}{x.text}
        </label>
      )
    });
  }
  handleRadioChange(evt) {
    this.setState({ selected: evt.target.value });
  }
}

export default FormRadio;
