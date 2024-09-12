import { FC } from 'react'
import { AppNavi, AppNaviButtonProps } from 'smarthr-ui'
import styled from 'styled-components'

import { theme } from '@/lib/smarthrTheme'

type Props = {
	naviButtons: AppNaviButtonProps[]
}
export const MyAppNavi: FC<Props> = ({ naviButtons }) => {
	return (
		<Wrapper>
			<AppNavi label='template' buttons={naviButtons} displayDropdownCaret />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 0;
	background-color: ${theme.color.BACKGROUND};
`
