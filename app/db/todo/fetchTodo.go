package todo

import (
	"app/db"
	"app/models"
)

func FetchTodo(id string) (models.TodoModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todo models.TodoModel
	result := db.DB.Where("id = ?", id).First(&todo)
	err := result.Error

	return todo, err
}