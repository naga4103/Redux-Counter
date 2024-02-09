import React from 'react'

import {Container,Row,Col,Button} from 'react-bootstrap'



import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter'

const Counter=()=>{

//const [count,setCount]=useState(0)

const {count}=useSelector((state)=>state.counter)

const dispatch=useDispatch();

  return (
    <>
    <Container className='mt-5 counter'>
        <Row className='d-flex flex-column'>
            <Col>
            <p>{count}</p>


            
            </Col>

            <Col>
            
<Button variant='success' onClick={()=>dispatch(increment())} className="mr-3 button-inc">Increment</Button>
<Button variant='danger'  onClick={()=>dispatch(decrement())}>Decrement</Button>

            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default Counter