package models

import (
	"time"

	"github.com/google/uuid"
)

type StampModel struct {
	Id        	string `gorm:"primarykey"`
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
	RallyId  	string `json:"rally_id"`
	Name		string `json:"name"`
	Description string `json:"description"`
	QrCode		string `json:"qr_code"`
	UserCollect []UserCollectModel `gorm:"foreignKey:StampID;references:Id"`
}

func (data *StampModel) Init() {
	data.Id = uuid.New().String()
}