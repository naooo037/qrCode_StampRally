package todo

import (
	"app/db"
	"app/models"
)

func UpdateTodo(id string, updatedTodo models.TodoModel) models.TodoModel {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todo models.TodoModel
	db.DB.First(&todo, id)
	todo = updatedTodo
	
	db.DB.Save(&todo)

	return todo
}