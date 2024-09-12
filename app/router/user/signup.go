package user

import (
	"github.com/gin-gonic/gin"
	"app/db/user"
)

func PostUserSignup(c *gin.Context) {
	status := user.CreateUser(c)

	if status == 201{
		c.JSON(status, gin.H{"message": "OK"})
	}else if status == 409 {
		c.JSON(status, gin.H{"message": "ユーザIDがすでに存在しています"})
	}
}