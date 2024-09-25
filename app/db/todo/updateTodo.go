package todo

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func UpdateTodo(id string, updatedTodo models.TodoModel) models.TodoModel {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todo models.TodoModel
	db.DB.Where("id = ?", id).First(&todo)
	todo = updatedTodo
	
	db.DB.Save(&todo)

	return todo
}