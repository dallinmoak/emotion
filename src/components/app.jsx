import React from 'react';
import Button from './button.jsx';

export default function App(props) {
  return(
    <div className='main-content'>
      <h1>Hello World!</h1>
      <Button className='main btn'>
        Regular
      </Button>
      <Button className='main btn btn-primary'>
        Primary
      </Button>
    </div>
  );
}