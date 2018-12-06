class CreateUserTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tickets do |t|
      t.belongs_to :user, index: true
      t.belongs_to :ticket, index: true
      t.timestamps
    end
  end
end
