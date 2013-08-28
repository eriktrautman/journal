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
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  def update
    @post = Post.find_by_id(params[:id])
    if @post
      if @post.update_attributes(whitelisted_params)
        puts "\n\n UPDATED !! \n\n"
        render :json => @post
      else
        render :json => @post.errors, :status => 422
      end
    end
  end

  def destroy
    @post = Post.find_by_id(params[:id])
    if @post
      @post.delete
      render :json => @post
    end
  end

  private 
    def whitelisted_params
      params.require(:post).permit(:title, :body, :id)
    end
end
