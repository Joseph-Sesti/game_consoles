class VideogamesController < ApplicationController
  def show
    videogame = Videogame.find(params[:id])
    render json: VideogameSerializer.new(videogame)
  end

  def index
    videogames = Videogame.all
    render json: VideogameSerializer.new(videogames)
  end

  def create
    # debugger
    videogame = Videogame.create(params[:title])
    render json: VideogameSerializer.new(videogame)
  end
end
