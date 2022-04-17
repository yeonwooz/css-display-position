import React from 'react'
import * as Types from '~/types'

const BoldText: React.FC<Types.Text> = ({ text }) => {
    return <b>{text}</b>
}

export default BoldText
