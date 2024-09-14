package todo

import (
	"github.com/gin-gonic/gin"
	"app/db/todo"
)

func GetTodo(c *gin.Context) {
	todos := todo.FetchTodos(c)

	c.JSON(200, gin.H{
		"todos": todos,
	})
}