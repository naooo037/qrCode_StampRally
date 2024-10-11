package db

import (
	"fmt"
	"os"

	"github.com/itojun-1230/go_react_template/app/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

//データベースの初期接続
func InitializeDB() (*gorm.DB, error) {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
	dbUser := os.Getenv("POSTGRES_USER")
	dbPass := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")
	dbHost := os.Getenv("HOST_DB")
	dbPort := os.Getenv("PORT_DB")
	// PostgreSQL接続情報
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Tokyo", dbHost, dbUser, dbPass, dbName, dbPort)

	// GormでPostgreSQLに接続
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println("Failed to connect to database:", err)
	}

	DB.AutoMigrate(&models.UserCollectModel{})
	
  return DB, nil
}