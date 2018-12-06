import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = (props) => {
    const { text } = props;

    return (
        <div className="static-modal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    {text}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            )}
    </div>
    );
};

export default InfoModal;