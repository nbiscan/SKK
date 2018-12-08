require "rails_helper"

RSpec.describe Ticket, type: :model do
  # Association test
  # ensure an ticket record belongs to a single carrier record
  it { should belong_to(:carrier) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:price) }
  it { should validate_presence_of(:no_of_cards) }
end
