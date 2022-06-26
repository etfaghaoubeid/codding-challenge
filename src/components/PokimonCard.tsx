import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pokimon } from "../types";

type PokiCardProps = {
  poki: Pokimon;
};

const PokimonCard = ({ poki }: PokiCardProps) => {
  const { name } = poki;
  return (
    <StyledLink to={`/${poki.name}`}>
      <CardContainer>
        <h3> {name}</h3>
        <PokimonImage src={poki.sprites.back_default} alt="poki" />
      </CardContainer>
    </StyledLink>
  );
};
const CardContainer = styled.div`
  background-color: #eee;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  height: 10rem;
  width: 10rem;
  margin-right: 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const PokimonImage = styled.img``;

export default PokimonCard;
