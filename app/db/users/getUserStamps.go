package usersDB

import (
	"github.com/itojun-1230/go_react_template/app/db"
	"github.com/itojun-1230/go_react_template/app/models"
)

type CollectStampsModel struct {
	models.StampModel
	IsCollected bool `json:"is_collected"`
}

// ユーザーが持っているスタンプを取得する
func GetUserStamp(id string) ([]CollectStampsModel, error) {

	db.DB.AutoMigrate(&models.UserModel{})
	var user models.UserModel
	userResult := db.DB.Where("id = ?", id).First(&user)
	if userResult.Error != nil {
		return nil, userResult.Error
	}

	db.DB.AutoMigrate(&models.StampModel{})
	var stamps []models.StampModel
	stampsResult := db.DB.Where("rally_id = ?", user.RallyId).Find(&stamps)
	if stampsResult.Error != nil {
		return nil, stampsResult.Error
	}

	// ユーザーが持っているスタンプを取得
	var userCollectExists bool
  userCollectCheckResult := db.DB.Model(&models.UserCollectModel{}).
      Select("count(*) > 0").
      Where("user_id = ?", id).
      Find(&userCollectExists)
  if userCollectCheckResult.Error != nil {
      return nil, userCollectCheckResult.Error
  }
  
  // ユーザーが存在しない場合、空のリストを返す
	var userCollect []models.UserCollectModel
  if userCollectExists {
		userCollectResult := db.DB.Where("user_id = ?", id).Find(&userCollect)
		if userCollectResult.Error != nil {
				return nil, userCollectResult.Error
		}
  }else {
		userCollect = []models.UserCollectModel{}
	}

	// ユーザーが持っているスタンプを取得
	var collectStamps []CollectStampsModel
	for _, stamp := range stamps {
		var isCollected bool
		for _, collect := range userCollect {
			if stamp.Id == collect.StampID {
				isCollected = true
				break
			}
		}
		collectStamps = append(collectStamps, CollectStampsModel{
			StampModel: stamp,
			IsCollected: isCollected,
		})
	}

	return collectStamps, nil
}