import React from 'react';
import styles from './style.module.scss';
import MaxWithLayout from "../../../layouts/MaxWithLayout/index";
import { Typography } from "antd";

const { Title } = Typography;

const AnalysisContent = () => {
  return (
    <MaxWithLayout>
      <div className={styles['home-content']}>
        <Title
          level={3}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          Главная. Скоро будет
        </Title>
      </div>
    </MaxWithLayout>
  );
};

export default AnalysisContent;
