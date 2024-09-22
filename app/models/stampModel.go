package models

import (
	"time"

	"github.com/google/uuid"
)

type StampModel struct {
	id        	string `gorm:"primarykey"`
	CreatedAt 	time.Time
	UpdatedAt 	time.Time
	RallyId  	string `json:"rally_id"`
	Name		string `json:"name"`
	Description string `json:"description"`
	QrCode		string `json:"qr_code"`
	UserCollect []UserCollectModel `gorm:"foreignKey:StampID;references:StampID"`
}

func (data *StampModel) Init() {
	data.id = uuid.New().String()
}