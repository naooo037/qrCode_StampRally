package stampDB

import (
	"fmt"
	"log"

	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func CollectStamp(stamp_id string, user_id string) (models.UserCollectModel, error) {
	// トランザクションを開始
	tx := db.DB.Begin()

	// エラーハンドリングのための defer
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	// user_idが存在するか確認
	var user models.UserModel
	if err := tx.First(&user, "id = ?", user_id).Error; err != nil {
		tx.Rollback()
		return models.UserCollectModel{}, fmt.Errorf("user_id %s does not exist: %w", user_id, err)
	}

	// UserCollectModelの初期化
	var userCollect models.UserCollectModel
	userCollect.StampID = stamp_id
	userCollect.UserID = user_id
	userCollect.Init()

	// データベースへの挿入
	if err := tx.Create(&userCollect).Error; err != nil {
		tx.Rollback()
		log.Printf("Failed to create UserCollectModel: stamp_id=%s, user_id=%s, error=%v", stamp_id, user_id, err)
		return userCollect, err
	}

	// コミットしてトランザクションを終了
	if err := tx.Commit().Error; err != nil {
		return userCollect, err
	}

	return userCollect, nil
}
