package todoById

import (
	"app/db/todo"

	"github.com/gin-gonic/gin"
)

func GetTodoById(c *gin.Context) {
	id := c.Param("id")
	todo := todo.FetchTodo(id)
	
	c.JSON(200, gin.H{
		"todo": todo,
	})
}