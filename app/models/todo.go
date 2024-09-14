package models

import (
	"gorm.io/gorm"
)

type TodoModel struct {
	gorm.Model
	Username  string `json:"username"`
	Title     string `json:"title"`
	Completed bool    `json:"completed"`
}