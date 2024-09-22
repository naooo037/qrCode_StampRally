package models

import (
	"time"

	"github.com/google/uuid"
)

type StampRallyModel struct {
	id        string `gorm:"primarykey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	Name	  string `json:"name"`
	Description string `json:"description"`
	Stamps []StampModel `gorm:"foreignKey:RallyId;references:RallyId"`
	User []UserModel `gorm:"foreignKey:RallyId;references:RallyId"`
}

func (data *StampRallyModel) Init() {
	data.id = uuid.New().String()
}