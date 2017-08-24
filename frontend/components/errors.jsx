import React from 'react';

const Errors = ({ errors }) => {
  if (errors.length === 0) return null;
  const errorLis = errors.map((error, idx) => <li key={idx}>{error}</li>);
  return (
    <div className="errors">
      <ul>
        {errorLis}
      </ul>
    </div>
  );
};

export default Errors;
