package todo

import (
	"app/models"
	"app/db/todo"
	"github.com/gin-gonic/gin"
)

func PostTodo(c *gin.Context) {
	var newTodo models.TodoModel
	c.BindJSON(&newTodo)

	newTodo = todo.InsertTodo(newTodo)
	
	c.JSON(200, gin.H{
		"todo": newTodo,
	})
}