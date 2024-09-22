package todo

import (
	"github.com/itojun-1230/go_react_template/app/models"
	"github.com/itojun-1230/go_react_template/app/db"
)

func InsertTodo(todo models.TodoModel) models.TodoModel {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})
	todo.Init()
	db.DB.Create(&todo)
	
	return todo 
}