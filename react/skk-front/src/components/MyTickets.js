import React, { Component } from 'react';
import Ticket from './Ticket';

class MyTickets extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.tickets.map(ticket =>
                    <Ticket
                        from={ticket.from}
                        to={ticket.to}
                        dep={ticket.departure}
                        arr={ticket.arrival}
                        no={ticket.no_of_cards}
                        price={ticket.price}
                        buy={this.state.registered}
                    />)}
            </div>
        );
    }
}

export default MyTickets;