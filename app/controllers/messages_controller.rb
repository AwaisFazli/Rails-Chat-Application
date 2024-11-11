class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.message.build(message_params)
    if message.save
      redirect_to root_path
    else
      # handle failure, e.g., render an error message or re-render the form
    end
  end

  private

  def message_params
    params.permit(:body) 
  end
end
