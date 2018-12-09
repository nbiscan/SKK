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

        await this.checkDupl();

    }

    checkDupl() {
        var obj = {};
        var cnt = {};
        this.state.tickets.forEach((t, i) => {
            cnt[i] = 0;
        })
        var uniq = new Array();
        var count = new Array();

        for (var i = 0; i < this.state.tickets.length; i++) {
            const id = this.state.tickets[i]['id']-1;
            obj[id] = this.state.tickets[i];
            cnt[id] += 1;
        }


        for (var key in obj) {
            uniq.push(obj[key]);
            count.push(cnt[key]);
        }

        this.setState({
            uniqueTickets: uniq,
            uniqueTicketsCnt: count,
        });


    }

    render() {
        return (
            <div className='home'>

                <PageHeader className='header'>
                    <small>{this.state.email}</small><small><button className='link' onClick={() => history.push('/')}>Back</button></small>
                </PageHeader>

                {this.state.uniqueTickets.map((ticket, i) =>
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
                        count={this.state.uniqueTicketsCnt[i]}
                    />
                )}
            </div>
        );
    }
}

export default MyTickets;