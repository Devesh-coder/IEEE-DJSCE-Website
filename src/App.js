import React from 'react';
import cx from "classnames";
import styles from "./App.module.scss";
import ComponentRouter from './components/ComponentRouter';

function App() {
  return (
    <div className={cx(styles.App)}>
      {/* <p className={cx(styles.para)}>Hello this is just for example</p> */}
      <ComponentRouter />
    </div>
  );
}

export default App;
