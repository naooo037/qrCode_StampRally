package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func InsertRallies(newRally models.StampRallyModel) (models.StampRallyModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.StampRallyModel{})

	newRally.Init()
	
	result := db.DB.Create(&newRally)
	
	return newRally, result.Error
}
