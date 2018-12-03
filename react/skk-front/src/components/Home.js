import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Home.css';
import Ticket from './Ticket';
import history from '../history';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            registered: localStorage.getItem('token'),
        }
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:3000/tickets');
        await this.setState({
            tickets: resp.data,
        });
    }

    logout() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className='home'>
                {(!this.state.registered) && <PageHeader>
                    <small>
                        <Link className='link' to='/login'>Login</Link>
                    </small>
                    <small>
                        <Link className='link' to='/register'>Register</Link>
                    </small>
                </PageHeader>}

                {(this.state.registered) &&
                    <PageHeader>
                        <small><button className='link' onClick={() => history.push('/mytickets')}>My Tickets</button></small>
                        <small><button className='link' onClick={() => this.logout()}>Logout</button></small>
                    </PageHeader>}

                {this.state.tickets.map(ticket =>
                    <Ticket
                        from={ticket.from}
                        to={ticket.to}
                        dep={ticket.departure}
                        arr={ticket.arrival}
                        no={ticket.no_of_cards}
                        price={ticket.price}
                        buy={this.state.registered}
                    />
                )}
            </div>
        );
    }
}

export default Home;