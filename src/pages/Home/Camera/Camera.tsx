import { FC } from 'react'
import Webcam from 'react-webcam'
import { ActionDialog } from 'smarthr-ui'

const videoConstraints = {
	width: 600,
	height: 600,
	facingMode: 'user',
}

type Props = {
	isOpen: boolean
	onClickClose: () => void
	capturedImage: string | null
	webcamRef: React.RefObject<Webcam>
	canvasRef: React.RefObject<HTMLCanvasElement>
	capture: () => void
}
export const Camera: FC<Props> = ({
	isOpen,
	onClickClose,
	capturedImage,
	webcamRef,
	canvasRef,
	capture,
}) => (
	<ActionDialog
		isOpen={isOpen}
		title='ActionDialog'
		actionText='撮影'
		onClickAction={(closeDialog) => {
			capture()
			closeDialog()
		}}
		onClickClose={onClickClose}
		width='80vw'
	>
		<div style={{ position: 'relative', transform: 'scaleX(-1)', width: '100%', height: '50vh' }}>
			{!capturedImage ? ( //capturedImageが存在しない場合
				<Webcam
					videoConstraints={videoConstraints}
					style={{
						width: '100%',
						height: '100%',
					}}
					//音声を無効に設定
					audio={false}
					//Webcamの参照を設定
					ref={webcamRef}
					//スクリーンショットの形式をJPEGに設定
					screenshotFormat='image/jpeg'
				/>
			) : null}
			<canvas
				//Canvasの参照を設定
				ref={canvasRef}
				//Canvasのスタイルを設定
				style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' }}
			></canvas>
		</div>
	</ActionDialog>
)
