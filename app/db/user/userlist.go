package user

import (
	"app/db"
	"app/models"

	"github.com/gin-gonic/gin"
)

// ユーザのリストを取得する
func UserList(c *gin.Context) ([]models.UserModel) {
		// ユーザーテーブルを作成
		db.DB.AutoMigrate(&models.UserModel{})
		
		// ユーザーリストを取得
		var result []models.UserModel
		db.DB.Find(&result)

		return result
}