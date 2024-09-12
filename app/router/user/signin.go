package user

import (
	"github.com/gin-gonic/gin"
	"app/db/user"
)

func PostUserSignin(c *gin.Context) {
	status := user.AuthenticateUser(c)

	if status == 200 {
		c.JSON(status, gin.H{"message": "OK"})
	}else if status == 401 {
		c.JSON(status, gin.H{"message": "ユーザIDかパスワードが間違っています"})
	}
}