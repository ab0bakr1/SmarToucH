import { faCreditCard, faRectangleList, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Excel.css"

const Excel = () => {
  return (
    <section className='my-5'>
        <Row className='justify-content-between w-100 text-center' lg={3} md={3} sm={1} xs={1}>
            <div className='excel-card'>
                <div className='excel-1'>
                    <FontAwesomeIcon className='fs-1' icon={faCreditCard} style={{color: "rgb(55, 115, 255)",}} />
                </div>
                <h5>secure payment</h5>
            </div>
            <div className='excel-card'>
                <div className='excel-1'>
                    <FontAwesomeIcon className='fs-1' icon={faRectangleList} style={{color: "rgb(55, 115, 255)",}} />
                </div>
                <h5>various options</h5>
            </div>
            <div className='excel-card'>
                <div className='excel-1'>
                    <FontAwesomeIcon className='fs-1' icon={faThumbsUp} style={{color: "rgb(55, 115, 255)",}} />
                </div>
                <h5>original products</h5>
            </div>
        </Row>
    </section>
  )
}

export default Excel