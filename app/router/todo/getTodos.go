package todo

import (
	"github.com/gin-gonic/gin"
	"github.com/itojun-1230/go_react_template/app/db/todo"
)

func GetTodos(c *gin.Context) {
	todos := todo.FetchTodos()

	c.JSON(200, gin.H{
		"todos": todos,
	})
}