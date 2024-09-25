package models

import (
	"time"

	"github.com/google/uuid"
)

type StampRallyModel struct {
	Id        string `gorm:"primarykey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	Name	  string `json:"name"`
	Description string `json:"description"`
	Stamps []StampModel `gorm:"foreignKey:RallyId;references:Id"`
	User []UserModel `gorm:"foreignKey:RallyId;references:Id"`
}

func (data *StampRallyModel) Init() {
	data.Id = uuid.New().String()
}