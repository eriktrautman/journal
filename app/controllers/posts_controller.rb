class PostsController < ApplicationController
  respond_to :json

  def create

    @post = Post.new(whitelisted_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => 422  
    end

  end

  def home
  end

  def index
    render :json => Post.all
  end

  private 
    def whitelisted_params
      params.require(:post).permit(:title, :body)
    end
end
