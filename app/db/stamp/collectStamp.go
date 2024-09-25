package stampDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func CollectStamp(stamp_id string, user_id string) ( models.UserCollectModel , error ) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.UserCollectModel{})

	var userCollect models.UserCollectModel
	
	userCollect.StampID = stamp_id
	userCollect.UserID = user_id
	userCollect.Init()

	result := db.DB.Create(&userCollect)

	return userCollect, result.Error
}