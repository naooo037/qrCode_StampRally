package models

import (
	"time"

	"github.com/google/uuid"
)

type UserCollectModel struct {
	id        	string `gorm:"primarykey"`
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
	UserID		string `json:"user_id"`
	StampID		string `json:"stamp_id"`
}

func (data *UserCollectModel) Init() {
	data.id = uuid.New().String()
}