package stampDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

// スタンプを更新する
func UpdateStamp(id string, updateStamp models.StampModel) (models.StampModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.StampModel{})

	var stamp models.StampModel
	if err := db.DB.Where("id = ?", id).First(&stamp).Error; err != nil {
		return stamp, err
	}

	result := db.DB.Model(&stamp).Updates(updateStamp)

	return stamp, result.Error
}