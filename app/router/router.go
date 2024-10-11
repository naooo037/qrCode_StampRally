package router

import (
	"github.com/itojun-1230/go_react_template/app/router/hello"
	"github.com/itojun-1230/go_react_template/app/router/hellos"
	"github.com/itojun-1230/go_react_template/app/router/todo"
	"github.com/itojun-1230/go_react_template/app/router/todo/id"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	engine.GET("/api/hello", hello.GetHello)
	engine.GET("/api/hellos", hellos.GetHellos)

	engine.GET("/api/todo", todo.GetTodos)
	engine.POST("/api/todo", todo.PostTodo)
	engine.GET("/api/todo/:id", todoById.GetTodoById)
	engine.DELETE("/api/todo/:id", todoById.DeleteTodoById)
	engine.PUT("/api/todo/:id", todoById.PutTodoById)
	

	return engine
}
