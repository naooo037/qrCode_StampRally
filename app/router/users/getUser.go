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
	c.JSON(200, gin.H{
		"id": user.Id,
		"name": user.Name,
		"rally_id": user.RallyId,
		"CreatedAt": user.CreatedAt,
		"UpdatedAt": user.UpdatedAt,
	})
}