import React from 'react'
import { Card, CardBody } from '../styles/SignPost.styled'
import { Button, Col7, Container,Row, Section } from '../styles/uielemets'
export const SectionBanner = () => {
  return (
    <Section className='mt-5'>
        <Container>
            <Row className='justify-content-center'>
                <Col7>
                    <Card>
                        <CardBody>
                            <h3 className='text-center'>
                            Získejte dotace bez starostí
                            </h3>
                            <p>
                            Instalace včetně vyřízení dotací
                            </p>
                            <ul>
                                <li>
                                vybereme pro Vás optimální kombinaci instalací a dotačních programů
                                </li>
                                <li>
                                pomůžeme Vám dosáhnout na ty nejvyšší dotace 
                                </li>
                                <li>
                                zařídíme za Vás dotace bez chyb a v plné výši
                                </li>
                            </ul>
                            <div className='justify-content-center d-flex'>
                                <Button>
                                Chci vědět víc
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col7>
            </Row>
        </Container>
    </Section>
  )
}




