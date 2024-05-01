import {
    Button,
    Col,
    Form,
    Input,
    Select
} from "antd";

import ModalHeader from "../../shared/ModalHeader";
import React from "react";

export default function AddModal({
                                           onClose,
                                       }: any) {

    const [form] = Form.useForm<{}>();

    const onFinish = (value: any) =>{

    }

    return (
        <div className={"modal-wrapper"} style={{padding: "30px"}}>
            <ModalHeader title={"Добавление"} onClose={() =>{
                form.resetFields()
                onClose()
            }}/>
            <Form
                onFinish={(values) => onFinish(values)}
                form={form}
                layout={"vertical"}
            >
                <Form.Item
                    rules={[{ required: true }]}
                    name={"cost"}
                    label={"Себестоимость (руб.)"}
                >
                    <Input type={"number"}/>
                </Form.Item>
                <Form.Item
                    rules={[{ required: true }]}
                    name={"count"}
                    label={"Кол-во прихода (шт)"}
                >
                    <Input type={"number"}/>
                </Form.Item>
                <Form.Item
                    rules={[{ required: true }]}
                    name={"numberDT"}
                    label={"Номер ДТ"}
                >
                    <Input/>
                </Form.Item>

                <Col style={{display: "flex", gap: "15px"}}>
                    <Button
                        type={"primary"}
                        className={"button"}
                        style={{fontSize: "12px", width: "50%"}}
                        htmlType={"submit"}
                        // loading={isLoading}
                    >
                        Сохранить
                    </Button>
                    <Button
                        type={"primary"}
                        ghost
                        className={"button"}
                        style={{fontSize: "12px", width: "50%"}}
                        onClick={() =>{
                            form.resetFields()
                            onClose()
                        }}
                    >
                        Отмена
                    </Button>
                </Col>
            </Form>
        </div>
    );
}
