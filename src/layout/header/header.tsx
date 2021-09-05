import { Row, Col, Button } from 'antd';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Row className="m-header" >
            <Col span={4} offset={4}><Link to="/"><h1 className="h-title">E- Shop Dashboard</h1></Link></Col>
            <Col span={2} offset={6}><Link to="/AddCategory"><Button type="link">Category</Button></Link></Col>
            <Col span={2} ><Link to="/AddProduct"><Button type="link">Product</Button></Link></Col>
        </Row>);
}

export default Header;