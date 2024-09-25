package stamp

import (
	"github.com/gin-gonic/gin"
	stampDB "github.com/itojun-1230/go_react_template/app/db/stamp"
	"github.com/itojun-1230/go_react_template/app/models"
)

// スタンプを更新する
func PutStamp(c *gin.Context) {
	var id = c.Param("stamp_id")

	var stamp models.StampModel
	c.BindJSON(&stamp)

	stamp, err := stampDB.UpdateStamp(id, stamp)

	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, stamp)
}