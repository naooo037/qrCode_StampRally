package user

import (
	"app/db"
	"app/models"

	"github.com/gin-gonic/gin"
)

// PostされたIDとパスワードを検証する
func AuthenticateUser(c *gin.Context) (int) {
		// ユーザーテーブルを作成
		db.DB.AutoMigrate(&models.UserModel{})
		
		// リクエストボディを取得
		var user models.UserModel
		c.BindJSON(&user)
		// ユーザーIDとパスワードが一致するユーザーを取得
		var result []models.UserModel
		db.DB.Where("username = ? AND password = ?", user.Username, user.Password).Find(&result)

		// ユーザーが存在しない場合
		if len(result) == 0 {
			return 401
		}
		return 200
}