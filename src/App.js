import React , {Component} from 'react';
import styled, {createGlobalStyle ,ThemeProvider} from "styled-components";
import theme from "./theme";

createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  ${Card} {
    background-color: blue;
  }
`;


const Card = styled.div`
  background-color:white;
`

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

class App extends Component {
  render () {
    return ( 
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }

}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);



export default App;
