package todo

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func FetchTodo(id string) (models.TodoModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todo models.TodoModel
	result := db.DB.Where("id = ?", id).First(&todo)
	err := result.Error

	return todo, err
}