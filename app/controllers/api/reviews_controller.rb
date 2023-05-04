class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['userId', 'listingId']

    def create

    end

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end
    
    private

    def review_params
        params.require(:user_id, :listing_id, :body)
    end
end
