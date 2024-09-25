package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func DeleteRally(id string) (error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.StampRallyModel{})

	var rally models.StampRallyModel
	result := db.DB.Where("id = ?", id).Delete(&rally)
	err := result.Error

	return err
}