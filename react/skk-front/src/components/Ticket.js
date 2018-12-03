import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import moment from 'moment';
import '../styles/Ticket.css';
import BuyModal from './BuyModal';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
        }
    }

    showModal = () => {
        this.setState({
            showModal: true,
        });
    }

    close = () => {
        this.setState({
            showModal: false,
        });
    }

    render() {
        const { from, to, dep, arr, no, price, buy } = this.props;
        return (
            <div className='alll'>
                {(this.state.showModal &&
                    <BuyModal
                        show={this.showModal}
                        handleClose={this.close}
                    />
                )}
                <Panel className='ticket'>
                    <p>From: {from}</p>
                    <p>To: {to}</p>
                    <p>Departure time: {moment(dep).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>Arrival time: {moment(arr).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>Number of tickets left: {no}</p>
                    <p>Price: {price}</p>
                    {buy && <Button onClick={() => this.showModal()}> Buy me</Button>}
                </Panel>
            </div >
        );
    }
}

export default Ticket;