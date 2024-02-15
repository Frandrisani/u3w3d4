import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardArticolo from "./CardArticolo";
import { Results } from "../interfaces/Result";

const Welcome = () => {
  const [risultati, setRisultati] = useState<Results[]>([]);

  const ResultFetch = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const arrayOfResult = await response.json();
        console.log(arrayOfResult);
        setRisultati(arrayOfResult.results);
      } else {
        throw new Error("errore nel recupero dei risultati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ResultFetch();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Le ultime news:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {risultati.map((singleArticolo) => (
          <CardArticolo ResultData={singleArticolo} key={singleArticolo.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Welcome;
