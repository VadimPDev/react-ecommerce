import React from 'react'
import Modal from "react-bootstrap/Modal"
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalFooter from "react-bootstrap/ModalFooter"
import ModalTitle from "react-bootstrap/ModalTitle"

export const ModalUI = ({show,openHandler}) =>{
    return (
        <Modal show={show}>
      <ModalHeader>
        <ModalTitle>Checkout</ModalTitle>
        <button className='btn btn-sm btn-dark' onClick={openHandler}><i className='fa fa-times-circle'></i></button>
      </ModalHeader>
        <ModalBody><button className='btn btn-primary'>Pay order</button></ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
    )
}