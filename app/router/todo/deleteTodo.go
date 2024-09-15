package todo

import (
	"github.com/gin-gonic/gin"
	"app/db/todo"
)

func DeleteTodo(c *gin.Context) {
	id := c.Param("id")
	todo.DeleteTodo(id)
	
	c.JSON(200, gin.H{
		"result": "success",
	})
}