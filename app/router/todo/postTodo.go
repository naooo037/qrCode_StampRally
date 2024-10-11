package todo

import (
	"github.com/itojun-1230/go_react_template/app/models"
	"github.com/itojun-1230/go_react_template/app/db/todo"
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