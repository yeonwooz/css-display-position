import React from 'react'
import '~/App.css'
import BoldText from '~/utils/BoldText'
/*
function BoldText(text: string): ReactElement {  
  return <div>{text}</div>
}
함수표현식으로 선언하는 경우에는 반환타입이 ReactElement 로 약속되어 있다. 
React.FC 타입을 반환타입으로 사용하기 위해 화살표함수를 사용한다.
*/

const StaticBox: React.FC = () => {
    return <div className="box static">static</div>
}

const RelativeBox: React.FC = () => {
    return <div className="box relative">relative</div>
}

const AbsoluteBox: React.FC = () => {
    return <div className="box absolute">absolute</div>
}

const StickyBox: React.FC = () => {
    return <div className="box sticky">sticky</div>
}

const FixedBox: React.FC = () => {
    return <div className="box fixed">fixed</div>
}

const Position: React.FC = () => {
    return (
        <>
            <header>
                <p>
                    Position 속성에는
                    <span style={styles.Span} />
                    <BoldText text="static" />,
                    <BoldText text="relative" />,
                    <BoldText text="absolute" />,
                    <BoldText text="sticky" />,
                    <BoldText text="fixed" />{' '}
                    <span style={styles.Span}>속성이 있다.</span>
                </p>
            </header>
            <body className="longScroll">
                <StaticBox />
                <RelativeBox />
                <StickyBox />
                <AbsoluteBox />
                <FixedBox />
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

export default Position
