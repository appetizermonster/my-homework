import React from 'react';

function _makeOptions(items) {
  return items.map((x) => {
    return (
      <option key={x.value} value={x.value}>{x.text}</option>
    )
  });
}

export default (props) => {
  const options = _makeOptions(props.items || []);
  return (
    <select>
      {options}
    </select>
  );
};
