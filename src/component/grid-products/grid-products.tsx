import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { removeProductItem } from '../../redux/Product/product.actions'
import './grid-products.scss';

type CarouselCategoryProps = {
    removeProductItem: Function,
    ProductItems: any
}
type ProductParams = {
    idParams: string;
    nameParams: string;
};

const AllProducts = ({ ProductItems, removeProductItem }: CarouselCategoryProps) => {

    const { idParams, nameParams } = useParams<ProductParams>();

    return (
        <Row className="m-grid-product">
            {ProductItems && ProductItems.map((props: any) => (
                <>
                    {idParams === props.categoryId ?
                        <Col span={7} offset={1} >

                            <Card
                                className="m-card"
                                cover={
                                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
                                <Row className="container-icons">
                                    <Link to={`/UpdateProduct/${props.id}/${props.name}`}> <Button type="link" className="button" icon={<FormOutlined />} /></Link>
                                    <Button type="link" className="button" icon={<DeleteOutlined />} onClick={() => removeProductItem({ id: props.id, name: props.name, categoryId: props.categoryId, imageUrl: props.imageUrl, price: props.price })} />
                                </Row>
                                <div className="card-content"><h3>Name: {props.name}</h3><h3>Price: {props.price}$</h3></div>
                                <p>{nameParams} Category </p>
                            </Card>
                        </Col>
                        : ''}
                </>
            ))}
        </Row>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeProductItem: (item: any) => dispatch(removeProductItem(item)),
    };
};
const mapSateToProps = (state: any) => {
    return {
        ProductItems: state.product.ProductItems
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(AllProducts);