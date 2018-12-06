import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import history from '../history';
import axios from 'axios';

const BuyModal = (props) => {
    const { show, handleClose, id } = props;
    let cardNo = 0;

    const buy = async (cardNo) => {
        if (!cardNo) {
            alert("Enter card number please");
            return;
        }
        const resp = await axios.post(`http://localhost:3000/users/1/tickets/${id}`, {}, {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        }).catch(err => {
            alert('Error');
        });

        if (resp && resp.status === 201)
            alert('Ticket successfully bought.');

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
                        inputRef={ref => { cardNo = ref; }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={() => buy(cardNo.value)}>Buy</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            )}
    </div>
    );
};

export default BuyModal;