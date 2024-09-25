package users

import (
	"github.com/itojun-1230/go_react_template/app/db/users"

	"github.com/gin-gonic/gin"
)

func GetUserById(c *gin.Context) {
	id := c.Param("user_id")
	user, err := usersDB.FetchUser(id)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	c.JSON(200, user)
}