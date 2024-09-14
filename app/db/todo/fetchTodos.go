package todo

import (
	"app/models"
	"app/db"
	"github.com/gin-gonic/gin"
)

func FetchTodos(c *gin.Context) ([]models.TodoModel) {
	//マイグレーションを実行
	db.DB.AutoMigrate(&models.TodoModel{})

	var todos []models.TodoModel
	db.DB.Find(&todos)
	return todos
}