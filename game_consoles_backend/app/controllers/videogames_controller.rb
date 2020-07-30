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
    # console = Console.find_by(id: params[:console_id])
    videogame = Videogame.new(videogame_params)
    if videogame.save
      # console.videogames << videogame
      render json: VideogameSerializer.new(videogame)
    else
      render json: {message: 'Error! Videogame could not be created in controller.'}
    end
  end

  def destroy
    videogame = Videogame.find_by(id: params[:id])
    videogame.destroy
  end

  private

  def videogame_params
    params.require(:videogame).permit(:title, :console_id)
  end
end
