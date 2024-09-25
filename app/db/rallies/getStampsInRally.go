package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

// ユーザーが持っているスタンプを取得する
func GetStampsInRally(id string) ([]models.StampModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.StampModel{})

	var stamps []models.StampModel
	stampsResult := db.DB.Where("rally_id = ?", id).Find(&stamps)
	err := stampsResult.Error

	return stamps, err
}