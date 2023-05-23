import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import {CounterContext} from '../../Context/CounterContext'

const Products = () => {

  const {incrementarContador} = useContext(CounterContext);

  return (
    <div>
      Products
      <Button onClick={incrementarContador}>
        +
      </Button>
      </div>
  )
}

export default Products