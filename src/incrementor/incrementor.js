import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { clamp } from "./clamp";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  align-items: center;
  display: flex;
  height: 100%;
  border: 0;
  font-size: 4rem;
  padding: 0;
  height: 40px;
  background-color: transparent;
`;

const Value = styled.div`
  margin: 3px 8px 3px;
  padding: 4px 8px;
  min-width: 2rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1rem;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Incrementor({ min, max, value, onChange }) {
  const clampV = clamp(min, max);
  const disableMin = value === min;
  const disableMax = value === max;

  return (
    <Container>
      <Button onClick={() => onChange(clampV(value - 1))} disabled={disableMin}>
        <FontAwesomeIcon icon={faMinusSquare} />
      </Button>
      <Value>{value}</Value>
      <Button onClick={() => onChange(clampV(value + 1))} disabled={disableMax}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </Button>
    </Container>
  );
}

export default Incrementor;
