package router

import (
	"app/router/hello"
	"app/router/hellos"
	"app/router/user"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	engine.GET("/api/hello", hello.GetHello)
	engine.GET("/api/hellos", hellos.GetHellos)

	engine.GET("/api/user", user.GetUser)
	engine.POST("/api/user/signin", user.PostUserSignin)
	engine.POST("/api/user/signup", user.PostUserSignup)


	return engine
}
