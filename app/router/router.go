package router

import (
	"app/router/hello"
	"app/router/hellos"
	"app/router/todo"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	engine.GET("/api/hello", hello.GetHello)
	engine.GET("/api/hellos", hellos.GetHellos)

	engine.GET("/api/todo", todo.GetTodo)
	engine.POST("/api/todo", todo.PostTodo)
	engine.DELETE("/api/todo/:id", todo.DeleteTodo)
	

	return engine
}
