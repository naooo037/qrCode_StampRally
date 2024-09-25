package usersDB

import (
	"fmt"

	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

// ユーザーが持っているスタンプを取得する
func GetUserStamp(id string) ([]models.StampModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.UserCollectModel{})
	var collectStamps []models.UserCollectModel
	collectStampsIdResult := db.DB.Where("user_id = ?", id).Find(&collectStamps)
	err := collectStampsIdResult.Error
	if err != nil {
		return nil, err
	}

	var collectStampsId []string
	for _, collectStamp := range collectStamps {
		collectStampsId = append(collectStampsId, collectStamp.StampID)
	}
	fmt.Println(collectStampsId)

	db.DB.AutoMigrate(&models.StampModel{})
	var stamps []models.StampModel
	stampsResult := db.DB.Where("id IN (?)", collectStampsId).Find(&stamps)

	return stamps, stampsResult.Error
}