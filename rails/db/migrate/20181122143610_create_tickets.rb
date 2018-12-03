class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :from
      t.string :to
      t.datetime :departure
      t.datetime :arrival
      t.integer :no_of_cards
      t.integer :price
      t.references :carrier
      t.references :user_ticket

      t.timestamps
    end
  end
end
