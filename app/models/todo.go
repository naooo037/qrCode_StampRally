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
	Description string `json:"description"`
	Completed bool    `json:"completed"`
}

func (todo *TodoModel) Init() {
	todo.ID = uuid.New().String()
}