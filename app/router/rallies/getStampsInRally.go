package rallies

import (
	"github.com/itojun-1230/go_react_template/app/db/rallies"

	"github.com/gin-gonic/gin"
)

func GetStampsInRally(c *gin.Context) {
	var id = c.Param("rally_id")

	rallies, err := ralliesDB.GetStampsInRally(id)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	c.JSON(200, rallies)
}