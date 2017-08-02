import React from 'react';
import '../css/SubForm.css';

const SubForm = (props) => (
  <div className='SubForm'>
    <div className='SubFormContainer'>
      <div className='SubFormNav'>
        {props.title}
      </div>
      <div className='SubFormContent'>
        {props.children}
      </div>
    </div>
  </div>
);

export default SubForm;
