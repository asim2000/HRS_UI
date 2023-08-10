import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CustomModal(props) {
  const { className } = props;

  const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    props.setState(true)
  }

  useEffect(() => {
    setModal(!modal);
  }, [])
  
  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {props.title}
        </ModalHeader>
        <ModalBody>
          {props.message}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>navigate(props.link)}>
            {props.buttonValue}
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

CustomModal.propTypes = {
  className: PropTypes.string,
};

export default CustomModal;