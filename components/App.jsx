import React from 'react';
import PropTypes from 'prop-types';
import { ScreenClassProvider, Container } from 'react-grid-system';
import GridSystem from './GridSystem.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

function App(props) {

  return (
    <ScreenClassProvider fallbackScreenClass='xl'>
      <Container>
        <h1>
          React Grid System
        </h1>
        <h2>
          Grid:
        </h2>
        <GridSystem />
        <h3>Passed in string {props.str}</h3>

        <h2>
          Responsive utilities
        </h2>
      </Container>
    </ScreenClassProvider>
  );
}


export default App;
