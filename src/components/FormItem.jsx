import React from 'react';
import '../css/FormItem.css';

export default (props) => (
  <div>
    <div className='FormItemHeader'>
      {props.title}
    </div>
    <div className='FormItemContent'>
      {props.children}
    </div>
  </div>
);
