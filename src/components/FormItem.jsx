import React from 'react';

export default (props) => (
  <div className='FormItem'>
    <div className='FormItemHeader'>
      {props.title}
    </div>
    <div className='FormItemContent'>
      {props.children}
    </div>
  </div>
);
