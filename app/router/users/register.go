package users

import (
	"github.com/itojun-1230/go_react_template/app/db/users"
	"github.com/itojun-1230/go_react_template/app/models"

	"github.com/gin-gonic/gin"
)

func RegisterUser(c *gin.Context) {
	var newUser models.UserModel
	c.BindJSON(&newUser)

	newUser, err := usersDB.InsertUser(newUser)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	
	c.JSON(200, newUser)
}