import React from 'react';

function Input(props) {
  const { wrapperClassName, error, ...p } = props
  return (
    <div className={`form-group ${wrapperClassName}`}>
      <input type="text" {...p}/>
      {error ? (
        <span className="error">{error}</span>
      ) : null}
    </div>
  );
}

export default Input;
