import React from 'react';

export default (props) => (
  <button className='FormButton' onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
);
