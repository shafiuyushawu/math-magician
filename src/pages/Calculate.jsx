import React from 'react';
import Calculator from '../components/Calculator';

const Calculate = () => (
  <div className="grid grid-cols-2 p-20">
    <h2 className="text-6xl">Let&apos;s Do some maths!</h2>
    <div>
      <Calculator />
    </div>
  </div>
);

export default Calculate;
