import jsQR from 'jsqr'
import { FC, useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam'

import { GetUserStamps200ResponseInner } from '@/.openapi/api'

import { useCollectStampAction } from '@/hooks/useCollectStampAction'

import { Camera } from './Camera'

type Props = {
	setStamps: React.Dispatch<React.SetStateAction<GetUserStamps200ResponseInner[] | undefined>>
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CameraAdapter: FC<Props> = ({ setStamps, isOpen, setIsOpen }) => {
	//Webcamの参照を作成
	const webcamRef = useRef<Webcam>(null)

	//Canvasの参照を作成
	const canvasRef = useRef<HTMLCanvasElement>(null)
	//キャプチャした画像の状態を管理
	const [capturedImage, setCapturedImage] = useState<string | null>(null)

	const [stampId, setStampId] = useState<string | undefined>(undefined)

	const useCollectStamp = useCollectStampAction()

	// 四角枠の描画ロジック
	const drawSquare = () => {
		const canvas = canvasRef.current
		const context = canvas?.getContext('2d')

		if (canvas && context) {
			// Canvasの全体をクリア
			context.clearRect(0, 0, canvas.width, canvas.height)

			canvas.width = canvas.clientWidth
			canvas.height = canvas.clientHeight

			// 四角形の枠を描画
			const rectWidth = Math.min(canvas.width, canvas.height) * 0.6
			const rectHeight = Math.min(canvas.width, canvas.height) * 0.6
			const x = (canvas.width - rectWidth) / 2
			const y = (canvas.height - rectHeight) / 2

			context.strokeStyle = 'black' // 枠の色
			context.lineWidth = 5 // 枠の太さ
			context.strokeRect(x, y, rectWidth, rectHeight) // 枠の描画
		}
	}

	const capture = (): string | undefined => {
		//300x300の画像を取得
		const imageSrc = webcamRef.current?.getScreenshot({ width: 300, height: 300 })

		if (!imageSrc) {
			//画像が取得できなかった場合
			return //処理を終了
		}

		// Captureした画像を状態に保存して表示に切り替え
		setCapturedImage(imageSrc) //取得した画像を状態に保存

		//新しいImageオブジェクトを作成
		const img = new Image()

		//取得した画像をImageオブジェクトに設定
		img.src = imageSrc

		//画像が読み込まれたときの処理
		img.onload = function () {
			//Canvasの参照を取得
			const canvas = canvasRef.current
			//2Dコンテキストを取得
			const context = canvas?.getContext('2d')

			//anvasまたはコンテキストが取得できない場合は処理を終了
			if (!canvas || !context) return

			// //画像の幅をCanvasの幅に設定
			img.width = Math.min(canvas.width, canvas.height)

			// //画像の高さをCanvasの高さに設定
			img.height = Math.min(canvas.width, canvas.height)

			const x = (canvas.width - img.width) / 2
			const y = (canvas.height - img.height) / 2

			//画像をCanvasに描画
			context.drawImage(img, x, y, img.width, img.height)

			//Canvasから画像データを取得
			const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

			//jsQRを使用してQRコードを解析
			const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height)

			if (qrCodeData) {
				console.log('QRコードの内容:', qrCodeData.data, qrCodeData.location)

				//赤い線でQRコードの四隅を囲む
				context.strokeStyle = 'red'
				context.lineWidth = 5

				//QRコードの角の座標を取得
				const { topLeftCorner, topRightCorner, bottomRightCorner, bottomLeftCorner } =
					qrCodeData.location

				//QRコードの四隅を結ぶ
				//左上の角に移動
				context.moveTo(topLeftCorner.x, topLeftCorner.y)

				//右上の角に線を引く
				context.lineTo(topRightCorner.x, topRightCorner.y)

				//右下の角に線を引く
				context.lineTo(bottomRightCorner.x, bottomRightCorner.y)

				//左下の角に線を引く
				context.lineTo(bottomLeftCorner.x, bottomLeftCorner.y)

				//パスを閉じる
				context.closePath()

				//パスを描画
				context.stroke()

				const urlObj = new URL(qrCodeData.data)
				const prarams = new URLSearchParams(urlObj.search)
				const stampId = prarams.get('stampId')
				if (stampId === null) {
					return
				}
				setStampId(stampId)
			} else {
				console.log('QRコードが見つかりませんでした')
			}
		}
	}

	const onClickClose = () => {
		setIsOpen(false)
		setCapturedImage(null)
	}

	// カメラの中央に四角の枠を描画
	useEffect(() => {
		drawSquare()
	}, [isOpen])

	useEffect(() => {
		if (stampId === undefined) {
			return
		}
		useCollectStamp(stampId)
			.then(async () => {
				await sleep(1000)
				setStamps((prev) => {
					if (!prev) {
						return
					}
					return prev.map((stamp) => {
						if (stamp.Id === stampId) {
							return { ...stamp, isCollected: true }
						}
						return stamp
					})
				})
				location.reload()
				onClickClose()
			})
			.catch(() => {
				onClickClose()
			})
	}, [stampId])

	useEffect(() => {
		window.addEventListener('resize', drawSquare)
		return () => window.removeEventListener('resize', drawSquare)
	}, [])

	return (
		<Camera
			isOpen={isOpen}
			onClickAction={capture}
			onClickClose={onClickClose}
			capturedImage={capturedImage}
			webcamRef={webcamRef}
			canvasRef={canvasRef}
		/>
	)
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec))
