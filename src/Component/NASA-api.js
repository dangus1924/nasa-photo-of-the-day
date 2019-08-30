import React from 'react';
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 5em;
  text-align: center;
  color: #0099CC;
  font-weight: Bold;
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  padding: 20px; 
  text-align: center;
  color: #0099CC;
  border: 1px dashed;
  font-height:15.px;   
`;

function NasaCard(props) {   

return(
    <div>
        <Jumbotron>
            <Title>{props.title}</Title>
            <img src={props.url} />
            <Paragraph>{props.explanation}</Paragraph>
        </Jumbotron>
    </div>
)
}

export default NasaCard;