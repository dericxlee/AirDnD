class Api::ListingsController < ApplicationController
    def create
        @listing = Listing.new(listing_params)
        
        if @listing.save
            render :show
        else
            render json: { errors: @lsting.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find_by(params[:id])
        render :show
    end

    def update
        @listing = Listing.find_by(params[:id])
        
        if @listing.update!(listing_params)
            render :show
        end
    end

    def destroy
        @listing = Listing.find_by(params[:id])
        
        if @listing.destroy!
            render :add_index
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:host_id, :title, :description,
            :property_type, :address, :city, :price,
            :num_beds, :num_bedrooms, :num_baths)
    end
end