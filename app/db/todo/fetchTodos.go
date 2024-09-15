package todo

import (
	"app/models"
	"app/db"
)

func FetchTodos() ([]models.TodoModel) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todos []models.TodoModel
	db.DB.Find(&todos)
	return todos
}