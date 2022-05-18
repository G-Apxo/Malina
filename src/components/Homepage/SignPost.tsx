import React from 'react'
import { Card, CardBody } from '../styles/SignPost.styled'
import { Button, Col4, Col6, Container,Row } from '../styles/uielemets'

export const SignPost = () => {
  return (
    <div>
        <Container className='pt-6'>
            <Row>
            <Col4>
        <Card>
            <CardBody>
                <h3 className='text-center'>
                Fotovoltaika
                </h3>
                <ul>
                    <li>
                        extremní výkon 540 Wp
                    </li>
                    <li>
                        25letá záruka výkonu 
                    </li>
                    <li>
                    instalace bez baterie, s baterií i v kombinaci s tepelným čerpadlemw
                    </li>
                </ul>
                <div className='justify-content-center d-flex'>
                <Button>
                Více o solárních panelech
                </Button>
                </div>
            </CardBody>
        </Card>
        </Col4>
        <Col4>
        <Card>
            <CardBody>
                <h3 className='text-center'>
                Fotovoltaika
                </h3>
                <ul>
                    <li>
                        extremní výkon 540 Wp
                    </li>
                    <li>
                        25letá záruka výkonu 
                    </li>
                    <li>
                    instalace bez baterie, s baterií i v kombinaci s tepelným čerpadlemw
                    </li>
                </ul>
                <div className='justify-content-center d-flex'>
                <Button>
                Více o solárních panelech
                </Button>
                </div>
            </CardBody>
        </Card>
        </Col4>
        <Col4>
        <Card>
            <CardBody>
                <h3 className='text-center'>
                Fotovoltaika
                </h3>
                <ul>
                    <li>
                        extremní výkon 540 Wp
                    </li>
                    <li>
                        25letá záruka výkonu 
                    </li>
                    <li>
                    instalace bez baterie, s baterií i v kombinaci s tepelným čerpadlemw
                    </li>
                </ul>
                <div className='justify-content-center d-flex'>
                <Button>
                Více o solárních panelech
                </Button>
                </div>
            </CardBody>
        </Card>
        </Col4>
            </Row>
        </Container>

    </div>
  )
}
