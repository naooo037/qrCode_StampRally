package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func DeleteUser(id string) (error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{})

	var user models.UserModel
	result := db.DB.Where("id = ?", id).Delete(&user)
	err := result.Error

	return err
}