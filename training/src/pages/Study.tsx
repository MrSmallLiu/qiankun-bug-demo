import {MicroApp} from 'umi'

export default function Study(){
    const mode = 'training'
    return(
        <div>
            <h1>我是学习页面</h1>
            <MicroApp name="workflow-outsourcing" mode={mode}/>
        </div>
    )
}