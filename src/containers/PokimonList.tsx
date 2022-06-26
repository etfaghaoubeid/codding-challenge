import styled from "styled-components";
import PokiCard from "../components/PokimonCard";
import { usePokimonList } from "../hooks/usePokimonList";

const PokimonList = () => {
  const { isLoading, pokimons } = usePokimonList();
  return (
    <Container>
      <h1>List of poki</h1>
      <PokimonListContainer>
        {isLoading ? (
          <h3>Loading ... </h3>
        ) : (
          pokimons?.map((poki) => <PokiCard poki={poki} key={poki.id} />)
        )}
      </PokimonListContainer>
    </Container>
  );
};

export default PokimonList;
const Container = styled.div`
  margin-left: 5rem;
`;
const PokimonListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
