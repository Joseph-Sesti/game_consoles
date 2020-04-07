class VideogamesController < ApplicationController
  def show
    videogame = Videogame.finsd(params[:id])
    render json: VideogameSerializer.new(videogame)
  end

  def index
    videogames = Videogame.all
    render json: VideogameSerializer.new(videogames)
  end

  def create
    if videogame.uniq
      Videogame.create
    else
      flash.alert "That videogame has already been created."
    end
  end
end
