package stampDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

// スタンプを削除する
func DeleteStamp(id string) (models.StampModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.StampModel{})

	var stamp models.StampModel
	result := db.DB.Where("id = ?", id).Delete(&stamp)

	return stamp, result.Error
}