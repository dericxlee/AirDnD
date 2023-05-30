class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + ['userId', 'listingId']

    def create
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
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
        params.require(:review).permit(:user_id, :listing_id, :body, :rating)
    end
end
