import React from 'react';

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
    return this
      .props
      .items
      .map((x) => {
        const isSelected = (x.value === selectedValue);
        return (
          <div key={x.value}>
            <label>
              <input
                type='radio'
                value={x.value}
                checked={isSelected}
                onChange={this
                .handleRadioChange
                .bind(this)}/> {x.text}
            </label>
          </div>
        )
      });
  }
  handleRadioChange(evt) {
    this.setState({selected: evt.target.value});
  }
}

export default FormRadio;
