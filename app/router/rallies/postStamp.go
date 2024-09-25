package rallies

import (
	"github.com/itojun-1230/go_react_template/app/db/rallies"
	"github.com/itojun-1230/go_react_template/app/models"

	"github.com/gin-gonic/gin"
)

func PostStamp(c *gin.Context) {
	var id = c.Param("rally_id")

	var newStamp models.StampModel
	c.BindJSON(&newStamp)

	newStamp, err := ralliesDB.InsertStampsToRally(id, newStamp)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, newStamp)
}