package users

import (
	"github.com/itojun-1230/go_react_template/app/db/users"

	"github.com/gin-gonic/gin"
)

func DeleteUser(c *gin.Context) {
	id := c.Param("user_id")

	err := usersDB.DeleteUser(id)

	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, gin.H{
		"message": "User deleted successfully",
	})
}