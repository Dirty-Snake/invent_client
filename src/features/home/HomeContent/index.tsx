import React, { FC, useState } from 'react';
import styles from './style.module.scss';
import { Checkbox, Col, DatePicker, Dropdown, Row, Typography, Input, MenuProps } from "antd";
import MaxWithLayout from "../../../layouts/MaxWithLayout/index";
import Icon from "@ant-design/icons";
import PriceChart from "../components/PriceChart";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const HomeContent: FC = () => {

  const [selectedProducts, setSelectedProducts] = useState([])
  const [searchProduct, setSearchProduct] = useState('')

  const products = [
    {
      id: 1,
      title: 'test'
    },
    {
      id: 2,
      title: 'test'
    },
    {
      id: 3,
      title: 'test'
    },
    {
      id: 4,
      title: 'test'
    },
    {
      id: 5,
      title: 'test'
    },
    {
      id: 6,
      title: 'test'
    },
    {
      id: 7,
      title: 'test'
    },
    {
      id: 8,
      title: 'test'
    },
  ]

  const getProductsFilterItems = () => {
    if (!products) {
      return [];
    }

    let allItems: any[] = [];
    let selectedItems: any[] = [];

    products?.slice(0, 10)?.forEach((item: any) => {
      const isDuplicate = selectedProducts.some((productItem: any) => productItem?.id?.toString() === item?.id?.toString());

      if (!isDuplicate) {
        allItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item.title}
                checked={selectedProducts.some((productItems: any) => productItems?.id?.toString() === item?.id?.toString())}
                onChange={(e) => {
                  let newSelectedProducts = [...selectedProducts];
                  if (e.target.checked) {
                    newSelectedProducts.push(item);
                  } else {
                    newSelectedProducts = newSelectedProducts.filter((el: any) => el?.id?.toString() !== item?.id?.toString());
                  }
                  setSelectedProducts(newSelectedProducts);
                }}
              >
                {item.title}
              </Checkbox>
            </div>
          ),
          key: `product-${item.id}`,
        });
      }
    });

    selectedProducts?.forEach((item: any) => {
      const isDuplicate = selectedProducts.some((productItem: any) => productItem?.id?.toString() === item?.id?.toString());

      if (isDuplicate) {
        selectedItems.push({
          label: (
            <div
              style={{ display: "flex", gap: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Checkbox
                style={{ width: '100%' }}
                value={item.title}
                checked={selectedProducts.some((productItems: any) => productItems?.id?.toString() === item?.id?.toString())}
                onChange={(e) => {
                  let newSelectedProducts = [...selectedProducts];
                  if (e.target.checked) {
                    newSelectedProducts.push(item);
                  } else {
                    newSelectedProducts = newSelectedProducts.filter((el: any) => el?.id?.toString() !== item?.id?.toString());
                  }
                  setSelectedProducts(newSelectedProducts);
                }}
              >
                {item.title}
              </Checkbox>
            </div>
          ),
          key: `product-${item.id}`,
        });
      }
    });

    const items: MenuProps["items"] = [
      {
        label: (
          <Input
            value={searchProduct}
            className={"analytic-dropdown-input"}
            onClick={(e) => e?.stopPropagation()}
            onChange={(e) => setSearchProduct(e?.target?.value)}
            placeholder={"Поиск..."}
          />
        ),
        key: "product-search",
      },
      ...selectedItems,
      ...allItems
    ];

    return items;
  };

  return (
    <MaxWithLayout>
      <div className={styles.homeСontent}>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            width: '100%'
          }}
        >
          <Col span={4}>
            <Dropdown
              trigger={["click"]}
              placement={"bottomRight"}
              menu={{ items: getProductsFilterItems() }}
              overlayClassName="dropdown-border"
            >
              <div className="analytics-header-dropdown">
                <div>Регион</div>
                <Icon
                  style={{ marginTop: "2px", fontSize: "10px" }}
                />
              </div>
            </Dropdown>
          </Col>
          <Col span={4}>
            <Dropdown
              trigger={["click"]}
              placement="bottomRight"
              menu={{ items: getProductsFilterItems() }}
              overlayClassName="dropdown-border"
            >
              <div className="analytics-header-dropdown">
                <div>Пострадавшие</div>
                <Icon

                  style={{ marginTop: "2px", fontSize: "10px" }}
                />
              </div>
            </Dropdown>
          </Col>
          <Col span={4}>
            <Dropdown
              trigger={["click"]}
              placement="bottomRight"
              menu={{ items: getProductsFilterItems() }}
              overlayClassName="dropdown-border"
            >
              <div className="analytics-header-dropdown">
                <div>Фактор</div>
                <Icon

                  style={{ marginTop: "2px", fontSize: "10px" }}
                />
              </div>
            </Dropdown>
          </Col>
          <Col span={10}>
            <RangePicker
              // onChange={onChangeData}
              placeholder={["Начало", "Конец"]}
              // separator={
              //   <Icon component={rangePickerArrow}/>
              // }
              format={"DD.MM.YYYY"}
              // value={[dateSortStart, dateSortEnd]}
            />
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            width: '100%'
          }}
        >
          <PriceChart />
          <PriceChart />
        </Row>
      </div>
    </MaxWithLayout>
  );
};

export default HomeContent;
