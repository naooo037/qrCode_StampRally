package todo

import (
	"app/db"
	"app/models"
)

func DeleteTodo(id string) {
	db.DB.Where("id = ?", id).Delete(&models.TodoModel{})
}