import { FC } from 'react'
import { Cluster, FaCircleExclamationIcon } from 'smarthr-ui'
import styled from 'styled-components'

type Props = {
	message: string
}
export const ErrorLabel: FC<Props> = ({ message }) => (
	<ErrorCluster>
		<FaCircleExclamationIcon color={'DANGER'} />
		<p>{message}</p>
	</ErrorCluster>
)

const ErrorCluster = styled(Cluster)`
	display: flex;
	align-items: center;
`
