import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import PaymentService from '../../../services/paymentService';
import alertify from 'alertifyjs';

function ModalForPayment(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState()
  const toggle = () => {
    setModal(!modal);
    props.setShowModal(false)
  }

  useEffect(() => {
    setModal(!modal);
  }, [])

  const addAmount = () => {
    const paymentService = new PaymentService()
    paymentService.addPaymentByHotel({
        bookingId:props.bookingId,
        amount:amount
    }).then(result=>{
        alertify.success(result.message)
        toggle()
    }).catch(error=>{
        alertify.error(error.message)
        toggle()
    })
  }
  
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Add amount for {props.fullname}
        </ModalHeader>
        <ModalBody>
          <Input type='number' placeholder='Enter amount' required onChange={e=>setAmount(e.target.value)}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>addAmount()}>
            Add amount
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalForPayment.propTypes = {
  className: PropTypes.string,
};

export default ModalForPayment;