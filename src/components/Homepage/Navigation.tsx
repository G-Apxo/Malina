import React from 'react';
import Image from 'next/image';
import { Container,Row,Col2, Col4,Col6,Button, Section} from '../styles/uielemets';
import { Nav, Ul,NavItem } from '../styles/Head.styled';

export const Navigation = () => {
  return (
    <Section>
        <Container>
          <Row className='justify-space-between baseline'>
            <Col6 className='justify-content-start'>
            <Ul>
                <NavItem>
                Fotovoltaika
                </NavItem>
                <NavItem>
                Tepelná čerpadla
                </NavItem>
                <NavItem>
                Nabíjecí stanice
                </NavItem>
                <NavItem>
                Dotace
                </NavItem>
            </Ul>
            </Col6>
            <Col6 className='justify-content-end'>
            <Ul>
                <NavItem>
                Novinky a tipy
                </NavItem>
                <NavItem>
                Kariéra
                </NavItem>
                <NavItem>
                O nás
                </NavItem>
                <NavItem>
                Kontakt
                </NavItem>
            </Ul>
            </Col6>
            </Row>
        </Container>
    </Section>
  )
}
