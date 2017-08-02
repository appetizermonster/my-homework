import React from 'react';
import '../css/FormItem.css';

const FormItem = (props) => (
  <div>
    <div className='FormItemHeader'>
      {props.title}
    </div>
    <div className='FormItemContent'>
      {props.children}
    </div>
  </div>
);

export default FormItem;
