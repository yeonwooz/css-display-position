import React from 'react'
import * as Types from './types'
import './App.css'

/*
function BoldText(text: string): ReactElement {  
  return <div>{text}</div>
}
함수표현식으로 선언하는 경우에는 반환타입이 ReactElement 로 약속되어 있다. 
React.FC 타입을 반환타입으로 사용하기 위해 화살표함수를 사용한다.
*/

const BoldText: React.FC<Types.Text> = ({ text }) => {
    return <b>{text}</b>
}

const Display: React.FC = () => {
    return (
        <>
            <header>
                <p>
                    Display 속성은 너비와 높이를 갖는지를 결정하는
                    <span style={styles.Span} />
                    <BoldText text="none" />,
                    <BoldText text="inline" />,
                    <BoldText text="block" />,
                    <BoldText text="inline-block" />{' '}
                    <span style={styles.Span}>속성과,</span>
                </p>
                <p>
                    <span style={styles.Span}>
                        자식 요소 배치형태를 결정하는
                    </span>
                    <span style={styles.Span} />
                    <BoldText text="flex" />,
                    <BoldText text="grid" />,
                    <BoldText text="flow" />
                    <span style={styles.Span}>속성이 있다.</span>
                </p>
            </header>
            <body>
                <div className="box div-1"></div>
                <div className="box div-2">div-2</div>
                <p className="box p-1"></p>
                <p className="box p-2">p-2</p>
            </body>
        </>
    )
}

const styles: {
    [key: string]: React.CSSProperties
} = {
    Span: {
        margin: '0 1px',
    },
}

export default Display

export { BoldText }
