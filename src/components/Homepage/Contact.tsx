import React from 'react'
import { Form } from '../styles/Contact'
import { Container, Row, Col4, Section, Button } from '../styles/uielemets'

export const Contact = () => {
  return (
    <div>
        <Container className='mt-5'>
            <Section>
            <Row className='justify-content-center'>
                <Col4>
                <h2 className='text-center'>
                Nezávazně poptat
                </h2>
                <Form> 
                <label htmlFor="first">Jméno a příjmení *</label>
                <input type="text" id="first" name="first" required />

                <label htmlFor="Email">Email *</label>
                <input type="text" id="last" name="last" required />

                <label htmlFor="Telefon">Telefon *</label>
                <input type="" id="last" name="last" required />

                <label htmlFor="Můžeme">Můžeme volat o víkendu? *</label>
                <input className='checkbox' type="checkbox" id="last" name="last" required />

                <label htmlFor="Kraj">Kraj *</label>
                <select id="cars" name="carlist" form="Jihomoravský">
                <option value="Jihomoravský kraj">Jihomoravský kraj</option>
                </select>
                <label htmlFor="Okres">Okres *</label>
                <select id="cars" name="carlist" form="Vyberte">
                <option value="Jihomoravský kraj">Vyberte okres</option>
                </select>

                <label htmlFor="Vzkaz">Vzkaz *</label>
            
                <textarea id="story" name="story"
                        rows={5} cols={33}>
                </textarea>
                <Button type="submit">Odeslat</Button>
                <p>
                Odesláním souhlasím se zpracováním osobních údajů.
                </p>
                </Form>
                </Col4> 
            </Row>
            </Section>
        </Container>
    </div>
  )
}
