import React from 'react';
import '../css/FormHeader.css';

const FormHeader = (props) => (
  <div className='FormHeader'>
    {props.children}
  </div>
);

export default FormHeader;
