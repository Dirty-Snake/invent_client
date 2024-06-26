import {
  Spin,
} from "antd";
import ModalHeader from "../../../shared/ModalHeader";
import React from "react";
import useInventoryBookDataByID from "../../../entities/inventoryBook/hooks/useInventoryBookDataByID";
import dayjs from "dayjs";

export default function InfoModal({
                                    onClose,
                                    id,
                                  }: any){

  const {
    locationDataById,
    isLoading: isLoadingDataById,
  } = useInventoryBookDataByID(id)


  console.log(locationDataById)

  if (isLoadingDataById) {
    return (
      <div style={{
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Spin />
      </div>
    )
  }

  return (
    <div className={"modal-wrapper"} style={{ padding: "30px" }}>
      <ModalHeader title={"Информация"} onClose={() => {
        onClose()
      }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <p>
          Название: {locationDataById?.name}
        </p>
        <p>
          Описание: {locationDataById?.description}
        </p>
        <p>
          Инвентарный номер (8 символов): {locationDataById?.sku}
        </p>
        <p>
          Модель: {locationDataById?.info?.model}
        </p>
        <p>
          Заводской номер: {locationDataById?.info?.factory_number}
        </p>
        <p>
          Срок полезного использования (в месяцах): {locationDataById?.info?.period_use}
        </p>
        <p>
          Амортизация: {locationDataById?.info?.depreciation}
        </p>
        <p>
          Стоимость: {Number(locationDataById?.info?.cost)}
        </p>
        <p>
          Дата списания предмета: {dayjs(locationDataById?.info?.date_commissioning).format('YYYY-MM-DD HH:mm')}
        </p>
        <p>
          Списание предмета: {locationDataById?.decommissioned ? 'Да' : 'Нет'}
        </p>
        <p>
          Местоположение: {locationDataById?.location?.name}
        </p>
        <p>
          Производитель: {locationDataById?.info?.brand?.name}
        </p>
        <p>
          Ответственный: {locationDataById?.responsible?.username}
        </p>
        <div>
          История ответственных:
          <ul>
            {
              locationDataById?.histories?.map((item: any, index: any) =>
              <li style={{paddingLeft: 10}}>
                {index + 1}. {item?.user?.username}
              </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
