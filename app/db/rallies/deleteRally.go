package ralliesDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func DeleteRally(id string) (error) {

	db.DB.AutoMigrate(&models.StampModel{})
	result := db.DB.Where("rally_id = ?", id).Delete(&models.StampModel{})
	err := result.Error
	if(err != nil){
		return err
	}

	db.DB.AutoMigrate(&models.UserModel{})
	result = db.DB.Where("rally_id = ?", id).Delete(&models.UserModel{})
	err = result.Error
	if(err != nil){
		return err
	}

	//マイグレーションを実行
	db.DB.AutoMigrate(&models.StampRallyModel{})
	var rally models.StampRallyModel

	result = db.DB.Where("id = ?", id).Delete(&rally)
	err = result.Error

	return err
}