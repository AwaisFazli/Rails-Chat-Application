class RegistrationsController < ApplicationController
  def new
    # Renders the signup page
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      flash[:success] = 'Account created successfully'
      redirect_to root_path
    else
      flash.now[:error] = user.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
