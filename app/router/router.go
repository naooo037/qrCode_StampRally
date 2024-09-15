package router

import (
	"app/router/hello"
	"app/router/hellos"
	"app/router/todo"
	"app/router/todo/id"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	engine.GET("/api/hello", hello.GetHello)
	engine.GET("/api/hellos", hellos.GetHellos)

	engine.GET("/api/todo", todo.GetTodos)
	engine.POST("/api/todo", todo.PostTodo)
	engine.DELETE("/api/todo/:id", todoById.DeleteTodoById)
	engine.PUT("/api/todo/:id", todoById.PutTodoById)
	

	return engine
}
