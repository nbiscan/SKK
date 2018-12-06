# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

carriers = Carrier.create([{name: "FlixBus"}, {name: "Eurolines"}])

Ticket.create([{from: "Zagreb", to: "Berlin", departure: "2019-01-13T20:23:44.862Z", arrival: "2019-01-14T20:23:44.862Z", no_of_cards: 60, price: 100, carrier_id: 1}])
Ticket.create([{from: "Paris", to: "Vienna", departure: "2018-12-12T20:23:44.862Z", arrival: "2018-12-15T20:23:44.862Z", no_of_cards: 40, price: 90, carrier_id: 2}])
Ticket.create([{from: "Madrid", to: "Rome", departure: "2018-12-30T02:23:44.862Z", arrival: "2019-01-04T06:23:44.862Z", no_of_cards: 40, price: 90, carrier_id: 1}])
Ticket.create([{from: "Zagreb", to: "Bern", departure: "2018-12-23T20:23:44.862Z", arrival: "2018-12-25T20:23:44.862Z", no_of_cards: 60, price: 100, carrier_id: 2}])
