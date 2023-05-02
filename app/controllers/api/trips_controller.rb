class Api::TripsController < ApplicationController
    # wrap_parameters :trip, include: %i[user_id listing_id start_date closing_date]
    wrap_parameters include: Trip.attribute_names + ['userId', 'listingId', 'startDate', 'closingDate', 'numGuests']

    def create
        @trip = Trip.new(trip_params)
        # @trip.user_id = params[:user_id]
        # @trip.listing_id = params[:listing_id]
        # @trip.start_date = params[:start_date]
        # @trip.closing_date = params[:closing_date]


        if @trip.save!
            render :show
        else
            render json: {errors: @trip.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        @trips = Trip.all
        render :index
    end

    def show
        @trip = Trip.find(params[:id])
        render :show
    end

    def destroy
        @trip = Trip.find(params[:id])

        if @trip.destroy!
            render :show
        else
            render json: { errors: @trip.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def trip_params
        params.require(:trip).permit(:user_id, :listing_id, :start_date, :closing_date, :num_guests)
    end
end
