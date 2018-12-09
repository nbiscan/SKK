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
            uniqueTickets: [],
            uniqueTicketsCnt: [],
            email: localStorage.getItem('email'),
        }
    }

    async componentDidMount() {
        const resp = await axios.get(`http://localhost:3000/users/${localStorage.getItem('user')}/tickets`,
            {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
        await this.setState({
            tickets: resp.data,
        });

        var obj = {};
        var uniq = new Array();

        for (var i = 0, len = this.state.tickets.length; i < len; i++)
            obj[this.state.tickets[i]['id']] = this.state.tickets[i];


        for (var key in obj)
            uniq.push(obj[key]);

        this.setState({
            uniqueTickets: uniq,
        })

    }

    render() {
        return (
            <div className='home'>

                <PageHeader className='header'>
                    <small>{this.state.email}</small><small><button className='link' onClick={() => history.push('/')}>Back</button></small>
                </PageHeader>

                {this.state.uniqueTickets.map(ticket =>
                    <Ticket
                        id={ticket.id}
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