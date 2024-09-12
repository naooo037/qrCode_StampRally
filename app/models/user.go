package models

import (
	"gorm.io/gorm"
)

type UserModel struct {
	gorm.Model
	Username  string `json:"username"`
	Password string `json:"password"`
}