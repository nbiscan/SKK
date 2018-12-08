FactoryBot.define do
  factory :ticket do
    price { 10 }
    no_of_cards { 10 }
    carrier_id { 1 }
    arrival { "2019-01-13T20:23:44.862Z" }
    departure { "2019-01-13T20:23:44.862Z" }
    from { "a" }
    to { "b" }
  end
end
