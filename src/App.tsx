import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserContextProvider } from 'state';
import Routing from 'routing/Routing';
import theme from 'common/Theme';

import 'common/styles/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserContextProvider>
          <Routing />
        </UserContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
