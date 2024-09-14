package todo

import (
	"github.com/gin-gonic/gin"
	"app/db/todo"
)

func GetTodo(c *gin.Context) {
	todos := todo.FetchTodo(c)

	c.JSON(200, gin.H{
		"todos": todos,
	})
}