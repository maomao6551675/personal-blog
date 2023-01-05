import { Container, Card, Text } from "@nextui-org/react";

export const Content = () => {
  return (
    <Container css={{ maxW: "1280px" }}>
      <Card>
        <Card.Header>
          <Text b>Card Title</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text />
        </Card.Body>
      </Card>
    </Container>
  );
};
