package user

import (
	"github.com/gin-gonic/gin"
	"app/db/user"
)

func GetUser(c *gin.Context) {
	users := user.UserList(c)

	c.JSON(200, users)
}