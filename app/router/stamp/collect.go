package stamp

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/itojun-1230/go_react_template/app/db/stamp"
)

// スタンプを更新する
func Collect(c *gin.Context) {
	stampID := c.Param("stamp_id")
	userID := c.Param("user_id")

	collect, err := stampDB.CollectStamp(stampID, userID)
	if err != nil {
		log.Printf("Failed to collect stamp: stamp_id=%s, user_id=%s, error=%v", stampID, userID, err)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return // エラー後に関数を終了
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Stamp collected successfully",
		"collect": collect,
	})
}
