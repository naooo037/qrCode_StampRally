# QRコードスタンプラリー

## 概要
### なぜこれを作ったのか？
文化祭でいくつか出店した際、訪れるお客さんの数に偏りがあることに気づきました。すべての出し物に多くの方が触れていただけるように、何か良い方法はないかと考えた結果、スタンプラリーの導入を思いつきました。そこで、一般的なスタンプラリーとは異なり、多くの方が所持しているスマホを活用してスタンプを集めてもらう方式にしました。これにより、スタンプラリーの準備が簡素化され、出し物やスタンプを増やす際も柔軟に対応できるメリットがあります。

## 主な技術スタック
### フロントエンド
[<img src="https://img.shields.io/badge/-React-0050E3.svg?logo=React&style=flat">](https://git-scm.com/downloads)
[<img src="https://img.shields.io/badge/-Vite-001050.svg?logo=vite&style=flat">](https://git-scm.com/downloads)
[<img src="https://img.shields.io/badge/-TypeScript-2050A0.svg?logo=TypeScript&style=flat">](https://git-scm.com/downloads)

### バックエンド
[<img src="https://img.shields.io/badge/-Go-202224.svg?logo=go&style=flat">](https://go.dev/doc/install)
[<img src="https://img.shields.io/badge/-Gin-FFFFFF.svg?logo=gin&style=flat">](https://git-scm.com/downloads)

### その他
[<img src="https://img.shields.io/badge/-PostgreSQL-101010.svg?logo=postgresql&style=flat">](https://git-scm.com/downloads)
[<img src="https://img.shields.io/badge/-OpenAPI-FFFFFF.svg?logo=openapiinitiative&style=flat">](https://git-scm.com/downloads)


## ギャラリー
ユーザーがQRコード読み込む際に表示される画面
![black-line](https://github.com/user-attachments/assets/cb56d995-6169-4d45-ab8d-17c8d9410f43)


QR読み込み完了した際に表示される画面
![red-line](https://github.com/user-attachments/assets/58870e25-4613-45f1-b2f5-f93c08a9b67f)


ユーザーがスタンプラリーしている際のホーム画面
![collect-stamp](https://github.com/user-attachments/assets/2d6a1759-2ca2-4c52-91be-a1dce24fb0f8)


## 工夫した点
### ユーザー目線を意識
デバッグ中に、反射などの影響でQRコードがうまく認識できないケースがあったため、QRコード読み取り時に黒枠の四角を表示するようにしました。これにより、ユーザーがQRコードの角度や距離を調整しやすくなり、失敗率を大幅に軽減できました。た、読み取りが完了した際には、QRコードの四つ角を赤い線で結ぶことで、読み込みが成功したことが視覚的にわかるよう工夫しました。

## 苦労した点
### エンジニアの支援なしによる開発
ハッカソンのようにある程度の準備や企画が整ったものではなく、全て1からアイデアを出し、計画し、製作する必要がありました。これまで参加したハッカソンではエンジニアの方々のサポートを受けることができましたが、今回はそのような支援がなく、全て自分たちの力で問題を解決する必要がありました。