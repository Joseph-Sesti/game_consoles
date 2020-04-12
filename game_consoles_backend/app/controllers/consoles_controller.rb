class ConsolesController < ApplicationController
  def show
    console = Console.find(params[:id])
    render json: ConsoleSerializer.new(console)
  end

  def index
    consoles = Console.all
    render json: ConsoleSerializer.new(consoles)
  end
end
