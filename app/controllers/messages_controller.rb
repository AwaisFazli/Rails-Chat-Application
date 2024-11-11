class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.message.build(message_params)
    if message.save
      ActionCable.server.broadcast "chatroom_channel", { mod_message: message_render(message) }
    else
      # handle failure, e.g., render an error message or re-render the form
    end
  end

  private

  def message_params
    params.permit(:body) 
  end

  def message_render(message)
    render(partial: "message", locals: {message: message})
  end
end
