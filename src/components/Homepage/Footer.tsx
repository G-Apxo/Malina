import React from 'react'
import { Container, Row, Col4, Col8,Section, Button } from '../styles/uielemets'
import Image from 'next/image'
import Person from '../../../public/Person.png'
export const Footer = () => {
  return (
    <div>
        <Section>
        <Container className='mt-5 pt-6'>
            <Row>
                <Col4>
                    <Image src={Person}/>
                </Col4>
                <Col8>
                    <h3>
                    Chci vědět o všem novém
                    </h3>
                      <input type="text" id="first" name="first" placeholder='Váš e-mail' />
                      <Button>Zasílat</Button>
                </Col8>
            </Row>
            <Row>
                <Col4>
                <h3>
                Produkty
                </h3>
                <ul>
                    <li>
                    Fotovoltaika
                    </li>
                    <li>
                    Tepelná čerpadla
                    </li>
                    <li>
                    Nabíjecí stanice
                    </li>
                </ul>
                </Col4>
                <Col4>
                <h3>
                Malina Group
                </h3>
                <ul>
                    <li>
                    O nás
                    </li>
                    <li>
                    Novinky a tipy
                    </li>
                    <li>
                    Kariéra
                    </li>
                    <li>
                    Obchodní podmínky
                    </li>
                    <li>
                    Reklamační řád
                    </li>
                </ul>
                </Col4>
                <Col4>
                <h3>
                Kontakt na Malinu
                </h3>
                <ul>
                    <li>
                    Krakovská 583/9
                        Praha 1
                        110 00
                    </li>
                    <li>
                    kontakt@malinagroup.cz
                    </li>
                    <li>
                    +420 800 880 878
                    </li>
                </ul>
                </Col4>
            </Row>
            <Row>
                <Col4>
                GDPR a cookies
                </Col4>
                
            </Row>
        </Container>
        </Section>
    </div>
  )
}
