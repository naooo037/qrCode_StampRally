package stamp

import (
	"github.com/gin-gonic/gin"
	stampDB "github.com/itojun-1230/go_react_template/app/db/stamp"
)

func DeleteStamp(c *gin.Context) {
	id := c.Param("stamp_id")

	_, err := stampDB.DeleteStamp(id)

	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, gin.H{
		"message": "User deleted successfully",
	})
}