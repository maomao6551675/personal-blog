import { Container, Navbar, Image, Spacer } from "@nextui-org/react";
import { Content } from "../components/Content";
import BearLogo from "../assets/bearLogo.png";

const LandingPage = () => {
  return (
    <Container fluid css={{ maxw: "100%" }} xl>
      <Navbar variant={"static"}>
        <Navbar.Brand>
          <Image src={BearLogo} height={50} width={50} />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Spacer />
      <Content />
    </Container>
  );
};

export default LandingPage;
