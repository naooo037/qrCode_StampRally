package rallies

import (
	"github.com/itojun-1230/go_react_template/app/db/rallies"
	"github.com/itojun-1230/go_react_template/app/models"

	"github.com/gin-gonic/gin"
)

func PostRallies(c *gin.Context) {
	var newRallies models.StampRallyModel
	c.BindJSON(&newRallies)

	newRallies, err := ralliesDB.InsertRallies(newRallies)
	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, newRallies)
}