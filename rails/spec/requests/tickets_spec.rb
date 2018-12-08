require "rails_helper"

RSpec.describe "Tickets API", type: :request do
  # initialize test data
  let!(:carriers) { create_list(:carrier, 1) }

  let!(:tickets) { create_list(:ticket, 10) }
  let(:ticket_id) { tickets.first.id }

  # Test suite for GET /tickets
  describe "GET /tickets" do
    # make HTTP get request before each example
    before { get "/tickets" }

    it "returns tickets" do
      expect(JSON.parse(response.body)).not_to be_empty
      expect(JSON.parse(response.body).size).to eq(10)
    end

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end
  end
end
