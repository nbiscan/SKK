require "rails_helper"

RSpec.describe Carrier, type: :model do
  # Association test
  # ensure Carrier model has a 1:m relationship with the Ticket model
  it { should have_many(:tickets).dependent(:destroy) }
  it { should validate_presence_of(:name) }
end
