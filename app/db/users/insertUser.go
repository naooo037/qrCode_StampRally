package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

func InsertUser(newUser models.UserModel) (models.UserModel, error) {
	// マイグレーションを実行
	db.DB.AutoMigrate(&models.UserModel{})

	newUser.Init()
	
	err := db.DB.Create(&newUser).Error

	if err != nil {
		return newUser, err
	}

	return newUser, nil
}
