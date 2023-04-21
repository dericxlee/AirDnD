class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:show, :destroy]

    def show
        # render json: current_user
        @user = current_user
        render 'api/users/show'
    end

    def create
        @user = User.find_by_credentials(credential, password)

        if @user
            login!(@user)
            # render json: { user: @user}
            render 'api/users/show'
        else
            render json: { errors: ['Incorrect username or password.']}, status: :unauthorized
        end
    end

    def destroy
        current_user.logout!
        render json: { message: 'Successfully logged out'}
    end
end
