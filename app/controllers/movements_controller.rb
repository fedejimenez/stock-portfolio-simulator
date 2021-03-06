class MovementsController < ApplicationController
  include CryptosHelper
  include PortfoliosHelper
  
  before_action :set_movement, only: [:show, :edit, :update, :destroy]
  before_action :get_portfolio_and_crypto, only: [:create, :new]
  before_action :calculate_profit
  before_action :authorize

  # GET /movements
  # GET /movements.json
  def index
    @movements = Movement.all
    @breadcrumb_title = " MOVEMENTS"
    @breadcrumb_icon = 'exchange'
    @breadcrumb_subtitle = ''
    @breadcrumb_path1 = ''
    @breadcrumb_link1 = ''
    @breadcrumb_current = 'Movements'
  end

  # GET /movements/1
  # GET /movements/1.json
  def show
  end

  # GET /movements/new
  def new
    @movement = Movement.new
  end

  # GET /movements/1/edit
  def edit
  end

  # POST /movements
  # POST /movements.json
  def create
    @movement = Movement.new(movement_params)
    @movement.protfolio_id = current_portfolio.id
    respond_to do |format|
      if @movement.save
        format.html { redirect_to @movement, notice: 'Movement was successfully created.' }
        format.json { render :show, status: :created, location: @movement }
      else
        format.html { render :new }
        format.json { render json: @movement.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /movements/1
  # PATCH/PUT /movements/1.json
  def update
    respond_to do |format|
      if @movement.update(movement_params)
        format.html { redirect_to @movement, notice: 'Movement was successfully updated.' }
        format.json { render :show, status: :ok, location: @movement }
      else
        format.html { render :edit }
        format.json { render json: @movement.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /movements/1
  # DELETE /movements/1.json
  def destroy
    @movement.destroy
    respond_to do |format|
      format.html { redirect_to movements_url, notice: 'Movement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def get_portfolio_and_crypto
    @portfolio = Portfolio.find(params[:portfolio_id])
    @crypto = Portfolio.cryptos.find(params[:crypto_id])
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_movement
      @movement = Movement.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def movement_params
      params.require(:movement).permit(:price, :date, :quantity, :crypto_id, :operation, :portfolio_id, :user_id)
    end
end
