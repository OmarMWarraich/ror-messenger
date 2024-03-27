class ChatroomController < ApplicationController
  def index
    if user_signed_in?
      # display index.html.erb
      
    else
      redirect_to new_user_session_path
    end
  end
end
