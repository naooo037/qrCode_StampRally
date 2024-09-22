package main

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/router"
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
