package router

import (
	"app/router/hello"
	"app/router/hellos"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	engine.GET("/api/hello", hello.GetHello)
	engine.GET("/api/hellos", hellos.GetHellos)

	return engine
}
