package todo

import (
	"app/models"
	"app/db"
)

func InsertTodo(todo models.TodoModel) models.TodoModel {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})
	todo.Init()
	db.DB.Create(&todo)
	
	return todo 
}