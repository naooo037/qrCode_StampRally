package hellos

import "github.com/gin-gonic/gin"

func GetHellos(c *gin.Context) {
	// {message: string}の配列を返す
	c.JSON(200, []gin.H{
		{"message": "Hello, World!"},
		{"message": "Hello, Gin!"},
	})
}