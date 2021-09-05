import { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Input, Alert } from 'antd';
import './category.scss';
import { addCategoryItem, updateCategoryItem } from '../../redux/Category/category.actions';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

type CategoryProps = {
    addCategoryItem: Function,
    updateCategoryItem: Function,
    CategoryItems: any
}
type CategoryParams = {
    idParams: string;
    nameParams: string;
};

const Category = ({ addCategoryItem, updateCategoryItem, CategoryItems }: CategoryProps) => {

    const { idParams, nameParams } = useParams<CategoryParams>();
    const [item, setItem] = useState({ name: '', imageUrl: '' } as any);
    const [messageError, setMessageError] = useState(false);

    const onFinish = (values: any) => {
        setItem({ ...item, name: values.CategoryName, imageUrl: values.password });
        if (!idParams)
            addCategoryItem({ id: Math.random().toString(36).substring(2, 7), name: values.CategoryName, imageUrl: values.password })
        else
            updateCategoryItem({ id: idParams, name: values.CategoryName, imageUrl: values.password })
    };

    useEffect(() => {

        const existingCartItem = CategoryItems && CategoryItems.find(
            (cartItemItem: any) => cartItemItem.name === item.name
        )

        if (existingCartItem && !idParams) {
            setMessageError(true)
        } else {
            setMessageError(false)
        }
    }, [item, CategoryItems, idParams]);

    return (
        <div className="m-category">
            {messageError && <Alert message="Category Name already is exist !" type="error" />}
            <h1 className="lbl-header">{idParams ? `Update ${nameParams}` : 'Add New'} Category </h1>
            <Row className="content">
                <Col span={8} offset={8}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 12 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Category Name"
                            name="CategoryName"
                            rules={[{ required: true, message: 'Please input Name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 16, span: 6 }}>
                            <Button type="primary" htmlType="submit">
                                {idParams ? 'Update' : 'Add New'}
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>);
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addCategoryItem: (item: any) => dispatch(addCategoryItem(item)),
        updateCategoryItem: (item: any) => dispatch(updateCategoryItem(item)),
    };
};
const mapSateToProps = (state: any) => {
    return {
        CategoryItems: state.category.CategoryItems
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(Category);