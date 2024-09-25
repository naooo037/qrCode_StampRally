package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func InsertStampsToRally(rally_id string, newStamp models.StampModel) (models.StampModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.StampModel{})

	newStamp.Init()
	newStamp.RallyId = rally_id

	result := db.DB.Create(&newStamp)

	return newStamp, result.Error
}
