import { connect } from 'react-redux';
import { Carousel, Button, Row, Col } from 'antd';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './carousel-category.scss';
import { removeCategoryItem } from '../../redux/Category/category.actions'

type CarouselCategoryProps = {
    removeCategoryItem: Function,
    CategoryItems: any
}

const CarouselCategory = ({ removeCategoryItem, CategoryItems }: CarouselCategoryProps) => {

    return (
        <div className="m-carousel-category">
            <Carousel autoplay className="carousel"  >
                {CategoryItems && CategoryItems.map((props: any) => (
                    <Row>
                        <Col span={10} offset={2}  >
                            <img width="500px" height="300px" className="img" alt="img" src={props.imageUrl} />
                        </Col>
                        <Col span={11} offset={1} >
                            <Row justify="center">
                                <Link to={`/UpdateCategory/${props.id}/${props.name}`}> <Button type="link" className="btn-add-delete" icon={<FormOutlined />} /></Link>
                                <Button type="link" className="btn-add-delete" icon={<DeleteOutlined />} onClick={() => removeCategoryItem({ id: props.id, name: props.name, imageUrl: props.imageUrl })} />
                            </Row>
                            <h1>{props.name} Category </h1>
                            <Link to={`/AllProduct/${props.id}/${props.name}`}><Button type="link" className="btn-view">View all products</Button></Link>
                        </Col>
                    </Row>
                ))}
            </Carousel>
        </div>
    );
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        removeCategoryItem: (item: any) => dispatch(removeCategoryItem(item)),
    };
};

const mapSateToProps = (state: any) => {
    return {
        CategoryItems: state.category.CategoryItems
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(CarouselCategory);