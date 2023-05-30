class Api::ListingsController < ApplicationController
    wrap_parameters :listing, include: %i[title description address city price property_type max_guests num_beds num_baths num_bedrooms host_id host]
    
    def create
        @listing = Listing.new(listing_params)
        @listing.property_type = params[:property_type]
        @listing.max_guests = params[:max_guests]
        @listing.num_baths = params[:num_baths]
        @listing.num_beds = params[:num_beds]
        @listing.num_bedrooms = params[:num_bedrooms]
        @listing.host_id = params[:host_id]
        
        if @listing.save!
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        @listings = Listing.all

        if params[:city].present?
            @listings = @listings.where(city: params[:city])
        end

        if params[:guests].present?
            guests = params[:guests].to_i
            @listings = @listings.where("max_guests >= ?", guests)
        end

        if current_user
            @listings = @listings.where.not(host_id: current_user.id )
        end

        render :index
    end

    def manage
        @listings = Listing.where(host_id: current_user.id)

        render :manage
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def update
        @listing = Listing.find(params[:id])
        
        if @listing.update!(listing_params)
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        
        if @listing.destroy!
            render :show
        else
            render json: { errors: @listing.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def listing_params
        params.require(:listing).permit(:host_id, :title, :description,
            :property_type, :address, :city, :price, :max_guests,
            :num_beds, :num_bedrooms, :num_baths, photos: [])
    end
end