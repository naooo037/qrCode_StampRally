package models

import (
	"time"

	"github.com/google/uuid"
)

type UserModel struct {
	id        	string `gorm:"primarykey"`
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
	Name		string `json:"name"`
	RallyId	string `json:"rally_id"`
	UserCollect []UserCollectModel `gorm:"foreignKey:UserID;references:UserID"`
}

func (data *UserModel) Init() {
	data.id = uuid.New().String()
}