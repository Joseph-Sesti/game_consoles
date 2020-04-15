class VideogamesController < ApplicationController
  def show
    videogame = Videogame.find(params[:id])
    render json: VideogameSerializer.new(videogame)
  end

  def index
    videogames = Videogame.all
    render json: VideogameSerializer.new(videogames)
  end

  def new
    videogame = console.videogame.build
  end

  def create
    console = Console.find_by(id: params[:console_id])
    # videogame = Videogame.create(title: params[:title])
    videogame = Videogame.create(title: params[:videogame], console: params[:console_name])
    if videogame.save
      # console.videogames << videogame
      render json: VideogameSerializer.new(videogame)
    else
      render json: {message: 'Error! Videogame could not be created in controller.'}
    end
  end
end
