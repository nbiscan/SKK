import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import moment from 'moment';
import '../styles/Ticket.css';
import BuyModal from './BuyModal';
import axios from 'axios';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
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

    async delete(d, id) {

        const departure = moment(d).subtract(1, 'hours');
        const now = moment();

        if (now.isAfter(departure)) {
            alert('Its too late to cancel reservation');
            return;
        }

        const resp = await axios.delete(`http://localhost:3000/users/${localStorage.getItem('user')}/tickets/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });

        if (resp && (resp.status === 200 || resp.status === 204)) {
            window.location.reload();
        }
    }

    render() {
        const { from, to, dep, arr, no, price, buy, del, id } = this.props;
        return (
            <div className='alll'>
                {(this.state.showModal &&
                    <BuyModal
                        show={this.showModal}
                        handleClose={this.close}
                        id={id}
                    />
                )}
                <Panel className='ticket'>
                    <h3>From: {from}</h3>
                    <h3>To: {to}</h3>
                    <p>Departure time: {moment(dep).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>Arrival time: {moment(arr).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <p>Number of tickets left: {no}</p>
                    <p>Price: {price}</p>
                    {buy && <Button onClick={() => this.showModal()}>Buy</Button>}
                    {del && <Button onClick={() => this.delete(dep, id)}>Delete</Button>}
                </Panel>
            </div >
        );
    }
}

export default Ticket;