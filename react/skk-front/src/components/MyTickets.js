import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Ticket from './Ticket';
import axios from 'axios';
import history from '../history';
import '../styles/Home.css';


class MyTickets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
        }
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:3000/users/1/tickets',
            {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
        await this.setState({
            tickets: resp.data,
        });
    }

  

    render() {
        return (
            <div className='home'>

                <PageHeader>
                    <small><button className='link' onClick={() => history.push('/')}>Back</button></small>
                </PageHeader>

                {this.state.tickets.map(ticket =>
                    <Ticket
                        from={ticket.from}
                        to={ticket.to}
                        dep={ticket.departure}
                        arr={ticket.arrival}
                        no={ticket.no_of_cards}
                        price={ticket.price}
                        buy={false}
                        del={true}
                    />
                )}
            </div>
        );
    }
}

export default MyTickets;