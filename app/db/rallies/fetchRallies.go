package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func FetchRallies() ([]models.StampRallyModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.StampRallyModel{})

	var rallies []models.StampRallyModel
	result := db.DB.Find(&rallies)

	return rallies, result.Error
}