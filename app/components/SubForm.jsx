import React from 'react';

const SubForm = (props) => {
  const style = {
    textAlign: props.align,
    height: props.height
  };
  return (
    <div className='SubForm' style={style}>
      <div className='SubFormContainer'>
        <div className='SubFormNav'>
          {props.title}
        </div>
        <div className='SubFormContent'>
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default SubForm;
