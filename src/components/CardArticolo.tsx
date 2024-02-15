import { Col, Card } from "react-bootstrap";
import { Results } from "../interfaces/Result";

interface ResultProps {
  ResultData: Results;
}

const CardArticolo = ({ ResultData }: ResultProps) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={ResultData.image_url} />
        <Card.Body>
          <Card.Title>{ResultData.title}</Card.Title>
          <Card.Text>{ResultData.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default CardArticolo;
