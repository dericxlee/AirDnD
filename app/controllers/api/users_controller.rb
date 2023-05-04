class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'firstName', 'lastName']
  # wrap_parameters :user, include: %i[email password first_name last_name birthdate]

  def create
    @user = User.new(user_params)
    # @user.first_name = params[:first_name]
    # @user.last_name = params[:last_name]
  
    if @user.save!
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :birthdate, :photo)
  end

  # def user_params
  #   params.permit(:email, :username, :password)
  # end
end
