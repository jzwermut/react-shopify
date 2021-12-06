import React, { useState } from 'react';

const Playground = () => {

  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );

  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);

  const todos = {
  	day: 'Monday',
  	item: 'Go to the bank'
  }

  const json = JSON.stringify(todos);

  localStorage.setItem("todos", json);

  localStorage.clear()

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input className="border" value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default Playground;