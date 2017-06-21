class AddWinner < ActiveRecord::Migration
  def change

  	change_table :tasks do |t|
	  	t.boolean :winner
	end
  end
end
