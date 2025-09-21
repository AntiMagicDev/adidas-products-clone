import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Cards.module.css'
import camisetaUno from '../assets/img/camiseta-train-essentials-3-stripes.avif'
import camisetaDos from '../assets/img/camiseta-de-entrenamiento-train-essentials-feelready-logo.avif'
import camisetaTres from '../assets/img/camiseta-local-millonarios-fc-2025 (1).avif'
import camisetaCuatro from '../assets/img/camiseta-essentials-3-rayas-algodon.avif'
import camisetaCinco from '../assets/img/mini-uniforme-de-local-colombia-24.avif'
import camisetaSeis from '../assets/img/conjunto-camiseta-essentials-ninos.avif'
import camisetaSiete from '../assets/img/camiseta-3-rayas-essentials.avif'

function Cards() {
    return (
        <>
            <Container style={{display: 'flex', flexDirection: 'column', alignItems:'center'}} >
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaUno}/>
                            <Card.Body>
                                <Card.Text>
                                    <span style={{ color: 'gray', textDecoration: 'line-through', marginRight: '8px' }}>$79.950</span>
                                    <span style={{ color: 'red' }}>$63.992</span>
                                </Card.Text>
                                <Card.Title>Camiseta 3 Rayas adidas Essentials</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Sportswear <br/>
                                    5 colores
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaDos} />
                            <Card.Body>
                                <Card.Text style={{color:'black'}}>$139.950</Card.Text>
                                <Card.Title>Camiseta AEROREADY Estampada</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Sportswear
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaTres} />
                            <Card.Body>
                                <Card.Text style={{color:'black'}}>$199.950</Card.Text>
                                <Card.Title>Camiseta Local Millonarios FC 2023</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Fútbol
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaTres} />
                            <Card.Body>
                                <Card.Text style={{color:'black'}}>$199.950</Card.Text>
                                <Card.Title>Camiseta Local Millonarios FC 2023</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Fútbol
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaCuatro} />
                            <Card.Body>
                                <Card.Text>
                                    <span style={{ color: 'black', marginRight: '8px' }}>$79.950</span>
                                    <span style={{ color: 'blue' }}>$63.960 MIEMBROS</span>
                                </Card.Text>
                                <Card.Title>Camiseta 3 Rayas adidas Essentials</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Sportswear
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaCinco} />
                            <Card.Body>
                                <Card.Text style={{color:'black'}}>$199.950</Card.Text>
                                <Card.Title>Camiseta Visitante Selección Colombia Femenina 23</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Fútbol
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaSeis} />
                            <Card.Body>
                                <Card.Text>
                                    <span style={{ color: 'gray', textDecoration: 'line-through', marginRight: '8px' }}>$89.950</span>
                                    <span style={{ color: 'red' }}>$80.056</span>
                                </Card.Text>
                                <Card.Title>Camiseta Essentials Tee</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Sportswear <br/>
                                    3 colores
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{display: 'flex', justifyContent: 'center', marginBottom: '24px'}}>
                        <Card style={{height:'100%', width: '260px', border: 'none'}} className={`card ${styles.cardsHover}`}>
                            <Card.Img variant="top" src={camisetaSiete} />
                            <Card.Body>
                                <Card.Text>
                                    <span style={{ color: 'black', marginRight: '8px' }}>$129.950</span>
                                    <span style={{ color: 'blue' }}>$103.960 MIEMBROS</span>
                                </Card.Text>
                                <Card.Title>Camiseta adidas x Classic LEGO®</Card.Title>
                                <Card.Text style={{color:'gray'}}>
                                    Niño Sportswear <br/>
                                    2 colores
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cards