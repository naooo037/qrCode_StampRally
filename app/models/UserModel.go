package models

import (
	"time"

	"github.com/google/uuid"
)

type UserModel struct {
	Id        	string `gorm:"primarykey"`
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
	Name		string `json:"name"`
	RallyId	string `json:"rally_id"`
	UserCollect []UserCollectModel `gorm:"foreignKey:UserID;references:Id"`
}

func (data *UserModel) Init() {
	data.Id = uuid.New().String()
	data.UserCollect = []UserCollectModel{}
}