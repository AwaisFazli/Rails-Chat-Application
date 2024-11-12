# app/channels/chatroom_channel.rb
class ChatroomChannel < ApplicationCable::Channel
  @@online_users = []

  def subscribed
    # Track the current user
    unless @@online_users.include?(current_user.username)
      @@online_users << current_user.username
      broadcast_user_status("connected")
    end

    stream_from "chatroom_channel"
  end

  def unsubscribed
    # Remove the user from the online users list when they leave
    if @@online_users.delete(current_user.username)
      broadcast_user_status("disconnected")
    end
  end

  private

  def broadcast_user_status(status)
    ActionCable.server.broadcast "chatroom_channel", {
      type: status,
      data: { online_users: @@online_users }
    }
  end
end
