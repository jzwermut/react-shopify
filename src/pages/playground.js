import React, { useState } from 'react';

const Playground = () => {

  const [car, setCar] = useState([])

  localStorage.clear()

  return(
    <div>This is my playground</div>
  )

}

export default Playground;