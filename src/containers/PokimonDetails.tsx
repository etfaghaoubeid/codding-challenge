import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { usePokimonDetails } from "../hooks/usePikimonDetails";
const PokimonDetails = () => {
  let navigate = useNavigate();
  const handleGobackNavigation = () => {
    navigate("/");
  };
  const { name } = useParams();
  const { isLoading, pokimon } = usePokimonDetails(name!);
  return (
    <DetailsContainer>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Button onClick={handleGobackNavigation}> Go back</Button>
          <h3>Pokimon name: {pokimon?.name}</h3>
          <h4> Pokimon Weight: {pokimon?.weight}</h4>
          <PokimImage src={pokimon?.sprites.back_default} />
        </>
      )}
    </DetailsContainer>
  );
};
const DetailsContainer = styled.div`
  height: 20rem;
  width: 15rem;
  padding: 1rem;
  background: #eee;
  margin-left: 5rem;
  border-radius: 0.3rem;
`;
const Button = styled.button`
  border-radius: 0.4rem;
  color: "#fff";
  background-color: "#000";
  padding: 0.2rem 1rem;
  border: 0.3rem solid #000;
`;
const PokimImage = styled.img``;

export default PokimonDetails;
