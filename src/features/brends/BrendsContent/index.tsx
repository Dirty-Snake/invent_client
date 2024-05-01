import React, { useState } from 'react';
import styles from './style.module.scss';
import {
  Button,
  Col,
  Input,
  Row,
  Select,
  Table,
  DatePicker,
  Modal,
  Dropdown,
  MenuProps,
  Menu,
  message,
} from "antd";
import MaxWithLayout from "../../../layouts/MaxWithLayout/index";
import EditIcon from "../../../assets/Icons/EditIcon";
import BucketIcon from "../../../assets/Icons/BucketIcon";
import { MoreOutlined } from "@ant-design/icons/lib";
import AddModal from "../modal/AddModal";
import EditModal from "../modal/EditModal";


const BrendsContent = () => {

  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false)
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)

  const data = [
    {
      id: 1,
      cost: 1
    },
    {
      id: 2,
      cost: 2
    },
    {
      id: 3,
      cost: 3
    },
  ]
  const productsItemsForEdit: MenuProps["items"] = [
    {
      label: (
        <span style={{ display: "flex", gap: "10px" }}>
          <EditIcon />
          Редактировать
        </span>
      ),
      key: "EDIT",
    },
    {
      label: (
        <span
          style={{
            display: "flex",
            gap: "10px",
            // color: isLoadingDelete ? '#e0e0e0' : 'red',
            color: 'red',
            width: 180,
            // pointerEvents: isLoadingDelete ? 'none' : 'auto'
            pointerEvents: 'auto'
          }}>
          <BucketIcon />
          Удалить
        </span>
      ),
      key: "DELETE",
    }
  ];

  const getProductsActions = (record: any) => {
    return {
      items: productsItemsForEdit,
      onClick: ({ item, key, keyPath, domEvent }: any) => {
        switch (key) {
          case "EDIT":
            setIsOpenModalEdit(true)
            break;
          case "DELETE":

            break;
        }
      },
    };
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: "45%",
    },
    {
      title: "Стоимость руб",
      dataIndex: "cost",
      key: "cost",
      width: "45%",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      width: "10%",
      render: (text: any, record: any) => (
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Dropdown
            trigger={["click"]}
            placement={"bottomRight"}
            menu={getProductsActions(record)}
          >
            <MoreOutlined
              style={{ cursor: "pointer", fontSize: "20px" }} />
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <MaxWithLayout>
      <div className={styles.homeСontent}>

        <div className={styles.top}>
          <Button onClick={() => setIsOpenModalAdd(true)}>
            Добавить
          </Button>
        </div>

        <div className={styles.table}>

          <Table
            // loading={isLoading}
            className={"product-arrival-table"}
            columns={columns}
            dataSource={data}
            scroll={{ x: true }}
            pagination={{
              // onChange: (page, pageSize): any => setCurrentPage(page),
              position: ["bottomCenter"],
              // pageSize: Number(currentPageSize),
              // total: Number(costPriceData?.total),
              showSizeChanger: false,
              // current: currentPage,
            }}
          />
        </div>

      </div>

      <Modal
        open={isOpenModalAdd}
        closable={false}
        footer={null}
        width={600}
      >
        <AddModal
          onClose={() => setIsOpenModalAdd(false)}
        />
      </Modal>

      <Modal
        open={isOpenModalEdit}
        closable={false}
        footer={null}
        width={600}
      >
        <EditModal
          onClose={() => setIsOpenModalEdit(false)}
        />
      </Modal>
    </MaxWithLayout>
  );
};

export default BrendsContent;
