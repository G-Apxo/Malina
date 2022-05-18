import React from 'react'
import { Button, Col4, Container,Row, Section } from '../styles/uielemets'
import { Customul } from '../styles/IconSection.styled'
export const IconSection = () => {
  return (
    <div>
        <Container className='mt-5'>
            <Row>
                <Col4>
                    <Customul>
                        <li>
                        Ekologická energie
                        </li>
                    </Customul>
                </Col4>
                <Col4>
                <Customul>
                        <li>
                        Realizace fotovoltaiky do 4 měsíců od objednání
                        </li>
                    </Customul>
                </Col4>
                <Col4>
                <Customul>
                        <li>
                        Český výrobce
                        </li>
                    </Customul>
                </Col4>
            </Row>
            <Row>
                <Col4>
                <Customul>
                        <li>
                        Strategicky nezávislá energie
                        </li>
                    </Customul>
                </Col4>
                <Col4>
                <Customul>
                        <li>
                        Rychlá návratnost, dlouhodobá výnosnost
                        </li>
                    </Customul>
                </Col4>
                <Col4>
                <Customul>
                        <li>
                        Servis v ČR přímo od výrobce
                        </li>
                    </Customul>
                </Col4>
            </Row>
        </Container>
    </div>
  )
}
