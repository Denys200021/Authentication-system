import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '30vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '0rem'
      }}
    >
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={10} md={3} lg={5}>
            <div
              className='card p-3 p-md-2.5 shadow-lg'
              style={{
                borderRadius: '20px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
            >
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
