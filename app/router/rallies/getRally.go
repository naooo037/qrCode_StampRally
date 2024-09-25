package rallies

import (
	"github.com/itojun-1230/go_react_template/app/db/rallies"
	"github.com/gin-gonic/gin"
)

func GetRallyById(c *gin.Context) {
	id := c.Param("rally_id")
	rally, err := ralliesDB.FetchRally(id)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}

	c.JSON(200, gin.H{
		"Id": rally.Id,
		"name": rally.Name,
		"description": rally.Description,
		"CreatedAt": rally.CreatedAt,
		"UpdatedAt": rally.UpdatedAt,
		"stamps": rally.Stamps,
	})
}