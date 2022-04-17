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
    // 문서흐름에 따라 배치됨.
    // top, right, bottom, left 오프셋이나 z-index 요소를 지정해도 영향을 받지 않음
}

const RelativeBox: React.FC = () => {
    return <div className="box relative">relative</div>
    // 문서흐름에 따라 배치됨.
    // 자기 자신을 기준으로 오프셋 위치에 배치됨
}

const AbsoluteBox: React.FC = () => {
    return <div className="box absolute">absolute</div>
    // 문서흐름과 상관없이 가장 가까운 relative요소 혹은 조상 컨테이너를 기준으로 오프셋 위치에 배치됨
}

const StickyBox: React.FC = () => {
    return <div className="box sticky">sticky</div>
    // 문서흐름과 상관없이 '스크롤 박스' 기준으로 오프셋위치에 고정됨 (스크롤 박스를 따라다님))

}

const FixedBox: React.FC = () => {
    return <div className="box fixed">fixed</div>
    // 문서흐름과 상관없이 뷰포트 기준으로 오프셋위치에 고정됨 (뷰포트 스크롤을 따라다님))
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
