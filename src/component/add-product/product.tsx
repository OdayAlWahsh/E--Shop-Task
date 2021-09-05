import { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Input, Alert, Select } from 'antd';
import './product.scss';
import { addProductItem, updateProductItem } from '../../redux/Product/product.actions';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

type ProductProps = {
    addProductItem: Function,
    updateProductItem: Function,
    CategoryItems: any,
    ProductItems: any
}
type ProductParams = {
    idParams: string;
    nameParams: string;
};

const Product = ({ addProductItem, updateProductItem, CategoryItems, ProductItems }: ProductProps) => {

    const { idParams, nameParams } = useParams<ProductParams>();
    const [item, setItem] = useState({ name: '', categoryId: '', imageUrl: '', price: '' } as any);
    const [messageError, setMessageError] = useState(false);
    const { Option } = Select;

    const onFinish = (values: any) => {
        setItem({ ...item, name: values.ProductName, categoryId: values.ProductCategory, price: values.Productprice });
        if (!idParams)
            addProductItem({ id: Math.random().toString(36).substring(2, 7), name: values.ProductName, categoryId: values.ProductCategory, imageUrl: item.imageUrl, price: values.Productprice })
        else {
            updateProductItem({ id: idParams, name: values.ProductName, categoryId: values.ProductCategory, imageUrl: item.imageUrl, price: values.Productprice })
        }
    };

    const handleLoadLocalFile = (event: any) => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            reader.onloadend = () =>
                setItem({ ...item, imageUrl: reader.result });
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        const existingProductItem = ProductItems && ProductItems.find(
            (productItemItem: any) => productItemItem.name === item.name
        )
        if (existingProductItem && !idParams) {
            setMessageError(true)
        } else {
            setMessageError(false)
        }
    }, [item]);

    return (
        <div className="m-product">
            {messageError && <Alert message="Product Name already is exist !" type="error" />}
            <h1 className="lbl-header">{idParams ? `Update ${nameParams}` : 'Add New'} Product </h1>
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
                            label="Product Name"
                            name="ProductName"
                            rules={[{ required: true, message: 'Please input Name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Product Category"
                            name="ProductCategory"
                            rules={[{ required: true, message: 'Please select Category!' }]}
                        >
                            <Select >
                                {CategoryItems && CategoryItems.map((props: any) => (
                                    <Option value={props.id}>{props.name}</Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Product price"
                            name="Productprice"
                            rules={[{ required: true, message: 'Please input price!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Picture"
                            name="picture"
                            rules={[{ required: true, message: 'Please upload Picture!' }]}
                        >
                            <Input type="file" accept=".jpg, .jpeg, .png" onChange={(e) => (handleLoadLocalFile(e))} />
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
        addProductItem: (item: any) => dispatch(addProductItem(item)),
        updateProductItem: (item: any) => dispatch(updateProductItem(item)),
    };
};
const mapSateToProps = (state: any) => {
    return {
        CategoryItems: state.category.CategoryItems,
        ProductItems: state.product.ProductItems
    }
}
export default connect(mapSateToProps, mapDispatchToProps)(Product);