# Go×Reactテンプレート
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

## 環境構築
### インストールするもの
以下のバッジをクリックで公式サイトに遷移します

---
[<img src="https://img.shields.io/badge/-Git-000000.svg?logo=git&style=flat">](https://git-scm.com/downloads)

リポジトリを管理するのに使います

---

[<img src="https://img.shields.io/badge/-Node.js-131828.svg?logo=nodedotjs&style=flat">](https://nodejs.org/en/download/package-manager)
[<img src="https://img.shields.io/badge/-Node.js-131828.svg?logo=yarn&style=flat">](https://nodejs.org/en/download/package-manager)

Reactプロジェクトを実行するために使います

---

[<img src="https://img.shields.io/badge/-Go-202224.svg?logo=go&style=flat">](https://go.dev/doc/install)

Goプロジェクトを実行するために使います

---

[<img src="https://img.shields.io/badge/-Docker-202731.svg?logo=docker&style=flat">](https://docs.docker.com/engine/install/)

PostgreSQLサーバをDockerのコンテナで実行します

---

[<img src="https://img.shields.io/badge/-OpenJDK-555555.svg?logo=openjdk&style=flat">](https://jdk.java.net/)

このテンプレートの中で使用しているOpenAPIというものの実行するために使います

---

### 手順

cloneしたところから始めます

### yarnでライブラリをインストールする
rootディレクトリへ移動し、以下のコマンドを実行する
```
npm install -g yarn
yarn
```
これでnode_modulesというフォルダが生成されるはずです。
この中にJS関係のライブラリが突っ込まれてます。

### Goのライブラリをインストールする
appディレクトリへ移動し、以下のコマンドを実行する
```
go install
go install github.com/cosmtrek/air@latest
```

### .envファイルをrootディレクトリに格納する
担当のメンバーから.envファイルをもらってください。もらった.envファイルはrootディレクトリに入れておいてください。

.envファイルは環境変数が書かれています。これを使ってPostgreSQLサーバにアクセスします。

## 実行する
以下のコマンドをrootディレクトリからそれぞれ別のターミナルで実行してください

---
```
yarn dev
```
Reactプロジェクト実行

---
```
cd app
air
```
Goプロジェクトをホットリロードで実行

---
```
docker compose up
```

Dockerコンテナ上でPostgreSQLのデータベースサーバを実行
