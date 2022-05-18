import React from 'react'
import { Container,Row,Col4 } from '../styles/uielemets'
import { CardHeader,CardBody,Card  } from '../styles/Testimonials.styled'
import Image from 'next/image'
import Persons from '../../../public/Person.png'
import Sample from '../../../public/sample.png'
export const Testimonials = () => {
  return (
    <div>
        <Container  className='text-center mt-5'>
            <h2>
            Co o Malině říkají zákazníci?
            </h2>
            <Row>
                <Col4>
                    <Card>
                        <CardHeader className='text-center'>
                            <Image src={Persons} />
                             <p>
                            Kryšpína Ostružinová
                            <br/>
                            Praha
                            <br/>
                            Tepelné čerpadlo
                             </p>
                        </CardHeader>
                        <CardBody  className='text-center'>
                                <p>
                                ,,Kluky od Maliny zbožňuji,
                                protože udělali skvělou práci 
                                a ušetřili mi spousty peněz. 
                                Kluky od Maliny zbožňuji,
                                protože udělali skvělou práci a ušetřili m
                                i spousty peněz. “
                                </p>
                                <Image src={Sample} />
                        </CardBody>
                    </Card>
                </Col4>
                <Col4>
                    <Card>
                        <CardHeader className='text-center'>
                            <Image src={Persons} />
                             <p>
                             Kryšpína Ostružinová
                             <br/>
                            Praha
                            <br/>
                            Tepelné čerpadlo
                             </p>
                        </CardHeader>
                        <CardBody  className='text-center'>
                                <p>
                                ,,Kluky od Maliny zbožňuji,
                                 protože udělali skvělou práci a ušetřili mi spousty peněz. 
                                 Kluky od Maliny zbožňuji, protože udělali skvělou práci a ušetřili mi spousty peněz.
                                  Kluky od Maliny zbožňuji, protože udělali skvělou práci a ušetřili mi spousty peněz. “
                                </p>
                                <Image src={Sample} />
                        </CardBody>
                    </Card>
                </Col4>
                <Col4>
                    <Card>
                        <CardHeader className='text-center'>
                            <Image src={Persons} />
                            <p>
                             Kryšpína Ostružinová
                             <br/>
                            Praha
                            <br/>
                            Tepelné čerpadlo
                             </p>
                        </CardHeader>
                        <CardBody  className='text-center'>
                                <p>
                                ,,Kluky od Maliny zbožňuji, 
                                protože udělali skvělou práci a ušetřili mi spousty peněz. 
                                Kluky od Maliny zbožňuji, protože udělali skvělou práci a ušetřili mi spousty peněz.
                                 Kluky od Maliny zbožňuji, protože udělali skvělou práci a ušetřili mi spousty peněz. “
                                </p>
                                <Image src={Sample} />
                        </CardBody>
                    </Card>
                </Col4>
            </Row>
        </Container>
    </div>
  )
}
 