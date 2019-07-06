import React, { ReactNode } from 'react'
import './GlobalStylesProvider.scss'

type Props = {
  children: ReactNode
}

const GlobalStylesProvider = (props: Props) => <div id='GlobalStylesProvider'>{props.children}</div>

export default GlobalStylesProvider
