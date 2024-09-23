package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

// ユーザーが持っているスタンプを取得する
func GetUserStamp(id string) ([]models.StampModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{}, &models.StampModel{})

	var user models.UserModel
	userResult := db.DB.Where("id = ?", id).First(&user)
	err := userResult.Error
	if err != nil {
		return nil, err
	}

	var stampIds []string
	for i := 0; i < len(user.UserCollect); i++ {
		stampIds = append(stampIds, user.UserCollect[i].Id)
	}

	var stamps []models.StampModel
	stampsResult := db.DB.Where("id IN (?)", stampIds).Find(&stamps)
	err = stampsResult.Error
	if err != nil {
		return nil, err
	}
	return stamps, nil
}