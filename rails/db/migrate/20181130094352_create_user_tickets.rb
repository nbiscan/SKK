class CreateUserTickets < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tickets, :users
  end
end
