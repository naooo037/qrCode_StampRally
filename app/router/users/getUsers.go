package users

import (
	"github.com/itojun-1230/go_react_template/app/db/users"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users, err := usersDB.FetchUsers()
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	c.JSON(200, users)
}