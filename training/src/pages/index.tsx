import styles from './index.less';
import {Button} from 'antd'
import { history } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>我是training</h1>
      <Button type="primary" onClick={toTraining}>子应用</Button>
    </div>
  );
}
function toTraining(){
  history.push('/study')
}
