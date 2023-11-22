import React from 'react'
import "./New.css"
import AllPhones from "../../../Data/AllPhones.json"
import { Col, Row } from 'react-bootstrap'
import NewItem from './NewItem'

const New  = () => {
  return (
    <>
    <div className='new-title'>
        <h2>new <span className="title1" >Smar</span><span className="title2">T</span><span className="title3">oucH</span></h2>
    </div>
    <Row className='mx-auto' lg={4} md={2} sm={1} xs={1}>
        {AllPhones.slice(-8).map((item) =>(
            <Col className='my-3' key={item.id}>
                <NewItem {...item}/>
            </Col>
        ))}

    </Row>
    </>
  )
}

export default New 