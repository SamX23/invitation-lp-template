import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellowgreen;
  & span {
    font-size: 3rem;
  }
`;

const BarSection = styled.div`
  width: 5rem;
  padding: 0 1rem;
  text-align: center;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 3rem;
  }
`;

const Countdown = () => {
  return (
    <Bar>
      <BarSection>
        <h2>7</h2>
        <p>Days</p>
      </BarSection>
      <span>:</span>
      <BarSection>
        <h2>23</h2>
        <p>Hours</p>
      </BarSection>
      <span>:</span>
      <BarSection>
        <h2>59</h2>
        <p>Minutes</p>
      </BarSection>
      <span>:</span>
      <BarSection>
        <h2>59</h2>
        <p>Seconds</p>
      </BarSection>
    </Bar>
  );
};

export default Countdown;
