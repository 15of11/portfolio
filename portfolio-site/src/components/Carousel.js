import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/LinkedIn_logo.png';
import youtube from '../assets/images/Github-logo.png';
import evverest from '../assets/images/Stack-overflow-icon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Owen Ford',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: devgrub,
                    link: 'https://www.linkedin.com/in/owen-ford-8a100a193/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Owen Ford',
                    subTitle: 'GitHub Profile',
                    imgSrc: youtube,
                    link: 'https://github.com/15of11',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Owen Ford',
                    subTitle: 'Stack Overflow Profile',
                    imgSrc: evverest,
                    link: 'https://stackoverflow.com/users/14701100/owen-ford',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;