import React, { FC } from 'react';
import styles from './style.module.scss';
import { Typography } from "antd";

const { Title } = Typography;

const Header: FC = () => {

  return (
    <div className={styles['header']}>
      <div className={styles['headerMain']}>
        <Title
          level={3}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: '5px 10px',
            border: '1px solid rgba(0,0,0,0.2)',
            borderRadius: 10,
            fontWeight: 200
          }}
        >
          Авторизация
        </Title>
      </div>
    </div>
  );
};

export default Header;
