import React from 'react'
import { BannerSection } from '../styles/Banner.styled'
import { Button, Col6, Container,Row } from '../styles/uielemets'

export const Banner = () => {
  return (
    <div>
        <Container className='pt-6' >
            <BannerSection className='pl-3 pb-6 pt-6'>
                <Row>
                    <Col6>
                    <h2>
                    Solární panely přímo do výrobce
                    </h2>
                    <Button>
                    Solární panely
                    </Button>
                    </Col6>
                </Row>
            </BannerSection>
        </Container>
    </div>
  )
}
