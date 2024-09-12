package user

import (
	"app/db"
	"app/models"

	"github.com/gin-gonic/gin"
)

// PostされたIDとパスワードでユーザを作成する
func CreateUser(c *gin.Context) (int) {
		// ユーザーテーブルを作成
		db.DB.AutoMigrate(&models.UserModel{})
		
		// リクエストボディを取得
		var user models.UserModel
		c.BindJSON(&user)
		// ユーザーIDが重複していないか確認
		var result []models.UserModel
		db.DB.Where("username = ?", user.Username).Find(&result)

		// ユーザーIDが重複している場合
		if len(result) != 0 {
			return 409
		}
		// ユーザーを作成
		db.DB.Create(&user)
		return 201
}