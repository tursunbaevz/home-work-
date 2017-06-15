class TasksController < ApplicationController
  
  def index
    # Task.all.delete_all
    @incomplete_tasks = Task.where(complete: false)
    @complete_tasks = Task.where(complete: true)
    @task = Task.new

  end

  def new
    @task = Task.new
  end

  def create

    @task = Task.create!(task_params)
    
    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { render json: {task_id: @task.id} }
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes!(task_params)
    redirect_to tasks_url
  end

  def destroy

    @task = Task.destroy(params[:id])
    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { render json: {deleted: true} }
    end

    
  end

  private

  def task_params
    
    return params.require(:task).permit(:name, :complete)
  end


end
