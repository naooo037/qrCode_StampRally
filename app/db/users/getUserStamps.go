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
	err := db.DB.Where("id = ?", id).First(&user).Error
	if err != nil {
		return nil, err
	}

	var stampIds []string
	for i := 0; i < len(user.UserCollect); i++ {
		stampIds = append(stampIds, user.UserCollect[i].Id)
	}

	var stamps []models.StampModel
	err = db.DB.Where("id IN (?)", stampIds).Find(&stamps).Error
	if err != nil {
		return nil, err
	}
	return stamps, nil
}