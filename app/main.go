package main

import (
	"app/db"
	"app/router"
	"fmt"
)

func main() {
	db, err := db.InitializeDB()
	if err != nil {
		fmt.Println(err)
	}

	engine := router.Router(db)
	engine.Run(":8080")
}
