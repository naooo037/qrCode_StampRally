package todoById

import (
	"github.com/gin-gonic/gin"
	"github.com/itojun-1230/go_react_template/app/models"
	"github.com/itojun-1230/go_react_template/app/db/todo"
)

func PutTodoById(c *gin.Context) {
	id := c.Param("id")
	var updatedTodo models.TodoModel
	c.BindJSON(&updatedTodo)

	updatedTodo = todo.UpdateTodo(id, updatedTodo)

	c.JSON(200, gin.H{
		"todo": updatedTodo,
	})
}