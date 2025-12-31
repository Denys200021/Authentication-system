import { Container, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className=" py-5 ">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-45">
          <h1 className="text-center mb-4">Authentication System</h1>
          {userInfo ? (
            <>
              <h3 className="text-center my-2">Welcome {userInfo.name}</h3>
            </>
          ) : (
            <div className="d-flex">
              <Button variant="primary" href="/login" className="me-3">
                Sign In
              </Button>
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
