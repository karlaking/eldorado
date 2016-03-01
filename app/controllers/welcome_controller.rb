class WelcomeController < ApplicationController
  def index
    redirect_to aboutme_path
  end
end
