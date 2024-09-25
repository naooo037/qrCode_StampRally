package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func FetchUser(id string) (models.UserModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{})

	var user models.UserModel
	result := db.DB.Where("id = ?", id).First(&user)
	err := result.Error

	return user, err
}