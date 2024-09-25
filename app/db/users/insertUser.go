package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func InsertUser(newUser models.UserModel) (models.UserModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{})

	newUser.Init()
	
	result := db.DB.Create(&newUser)

	return newUser, result.Error
}
