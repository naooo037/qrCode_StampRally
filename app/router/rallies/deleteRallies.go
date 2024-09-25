package rallies

import (
	"github.com/itojun-1230/go_react_template/app/db/rallies"

	"github.com/gin-gonic/gin"
)

func DeleteRally(c *gin.Context) {
	id := c.Param("rally_id")

	err := ralliesDB.DeleteRally(id)

	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, gin.H{
		"message": "Rally deleted successfully",
	})
}