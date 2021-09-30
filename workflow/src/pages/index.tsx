import styles from './index.less';

import {useModel} from 'umi'
var top = 1;
export default function IndexPage() {
  const {mode} = useModel('@@qiankunStateFromMaster')
  return (
    <div>
      <h1 className={styles.title}>我是子应用workflow-{mode}</h1>
    </div>
  );
}
