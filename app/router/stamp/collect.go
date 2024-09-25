package stamp

import (
	"github.com/gin-gonic/gin"
	stampDB "github.com/itojun-1230/go_react_template/app/db/stamp"
	"github.com/itojun-1230/go_react_template/app/models"
)

// スタンプを更新する
func Collect(c *gin.Context) {
	var stamp_id = c.Param("stamp_id")
	var user_id = c.Param("user_id")

	var stamp models.StampModel
	c.BindJSON(&stamp)

	collect, err := stampDB.CollectStamp(stamp_id, user_id)

	if(err != nil){
		c.JSON(400, gin.H{
			"error": err,
		})
	}
	
	c.JSON(200, gin.H{
		"message": "Stamp collected successfully",
		"collect": collect,
	})
}