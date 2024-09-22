package todoById

import (
	"github.com/gin-gonic/gin"
	"github.com/itojun-1230/go_react_template/app/db/todo"
)

func DeleteTodoById(c *gin.Context) {
	id := c.Param("id")
	todo.DeleteTodo(id)
	
	c.JSON(200, gin.H{
		"result": "success",
	})
}