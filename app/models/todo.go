package models

import (
	"time"

	"github.com/google/uuid"
)

type TodoModel struct {
	ID        string `gorm:"primarykey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	Title     string `json:"title"`
	Completed bool    `json:"completed"`
}

func (todo *TodoModel) Init() {
	todo.ID = uuid.New().String()
}