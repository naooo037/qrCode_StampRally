package todo

import (
	"github.com/gin-gonic/gin"
	"app/db/todo"
)

func GetTodos(c *gin.Context) {
	todos := todo.FetchTodos()

	c.JSON(200, gin.H{
		"todos": todos,
	})
}