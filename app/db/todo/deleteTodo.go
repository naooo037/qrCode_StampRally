package todo

import (
	"app/db"
	"app/models"
)

func DeleteTodo(id string) {
	db.DB.Delete(&models.TodoModel{}, id)
}