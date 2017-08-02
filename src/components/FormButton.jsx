import React from 'react';

export default (props) => (
  <button className='FormButton' disabled={props.disabled}>{props.text}</button>
);
