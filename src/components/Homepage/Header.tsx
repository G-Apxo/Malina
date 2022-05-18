import React from 'react';
import Image from 'next/image';
import { Container,Row,Col2, Col4,Col6,Button, Section} from '../styles/uielemets';
import { Nav } from '../styles/Head.styled';
import { Navigation } from './Navigation';
export const Header = () => {
  return (
    <div>
       
        <Container>
        <Nav>
        <Row className='justify-space-between baseline'>
            <Col2>
                <h2>MALINA</h2>
            </Col2>
            <Col4>
                <Row>
                    <Col6>
                        <h4>
                        +420 800 880 878
                        </h4>
                        <small>
                        Dnes 8:00 - 18:00
                        </small>
                    </Col6>
                    <Col6>
                        <Button>
                        Nezávazná poptávka
                        </Button>
                    </Col6>
                </Row>
            </Col4>
        </Row>
        </Nav>
        </Container>
        <Section>
        <Navigation />
        </Section>
    </div>
  )
}
