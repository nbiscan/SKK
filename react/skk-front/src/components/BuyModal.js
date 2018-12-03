import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import history from '../history';

const BuyModal = (props) => {
    const { show, handleClose } = props;

    const buy = () => {
        
        handleClose();
        history.push('/');
    }

    return (
        <div className="static-modal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure want to buy this ticket?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Enter card number:
                    <FormControl
                        type="number"
                        placeholder="Card Number"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={() => buy()}>Buy</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            )}
    </div>
    );
};

export default BuyModal;