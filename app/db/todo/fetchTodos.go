package todo

import (
	"app/models"
	"app/db"
)

func FetchTodos() ([]models.TodoModel) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todos []models.TodoModel
	db.DB.Order("created_at desc").Find(&todos)
	return todos
}