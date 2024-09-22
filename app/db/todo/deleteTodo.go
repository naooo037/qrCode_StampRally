package todo

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func DeleteTodo(id string) {
	db.DB.Where("id = ?", id).Delete(&models.TodoModel{})
}