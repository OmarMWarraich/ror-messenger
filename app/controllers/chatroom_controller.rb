class ChatroomController < ApplicationController
  def index
    if user_signed_in?
      @messages = Message.all
    else
      redirect_to new_user_session_path
    end
  end
end
