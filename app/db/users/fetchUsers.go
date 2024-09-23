package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func FetchUsers() ([]models.UserModel, error) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{})

	var users []models.UserModel
	result := db.DB.Find(&users)

	return users, result.Error
}