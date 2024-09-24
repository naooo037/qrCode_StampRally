package router

import (
	"github.com/gin-gonic/gin"
	"github.com/itojun-1230/go_react_template/app/router/rallies"
	"github.com/itojun-1230/go_react_template/app/router/users"
	"gorm.io/gorm"
)

func Router(db *gorm.DB) (*gin.Engine) {
	engine := gin.Default()

	
	engine.GET("/api/users", users.GetUsers)
	engine.POST("/api/users", users.RegisterUser)
	engine.GET("/api/users/:user_id", users.GetUserById)
	engine.DELETE("/api/users/:user_id", users.DeleteUser)
	engine.GET("/api/users/:user_id/stamps", users.GetUserCollectStamps)

	engine.GET("/api/rallies", rallies.GetRallies)
	engine.POST("/api/rallies", rallies.PostRallies)

	return engine
}
