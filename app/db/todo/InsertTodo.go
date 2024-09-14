package todo

import (
	"app/models"
	"app/db"
)

func InsertTodo(todo models.TodoModel) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	db.DB.Create(&todo)
}