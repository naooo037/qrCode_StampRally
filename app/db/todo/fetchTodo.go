package todo

import (
	"app/db"
	"app/models"
)

func FetchTodo(id string) (models.TodoModel) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todo models.TodoModel
	db.DB.Where("id = ?", id).First(&todo)
	return todo
}