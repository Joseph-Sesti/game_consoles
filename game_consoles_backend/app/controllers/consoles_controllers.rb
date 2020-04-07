class ConsolesController < ApplicationController
  def show
    console = Console.find(params[:id])
    render json: ConsoleSerializer.new(console)
  end

  def index
    consoles = Console.all
    render json: ConsoleSerializer.new(consoles)
  end

  def create
    if console.uniq
      Console.create
    else
      flash.alert "That console has already been created."
    end
  end
end
