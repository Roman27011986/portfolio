import AppBar from "./components/AppBar";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import SertificatePage from "./pages/SertificatePage";
import FooterPage from "./pages/FooterPage";
import Container from "./components/Container";
function App() {
  return (
    <>
      <AppBar />
    <Container>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/portfolio">
          <PortfolioPage/>
        </Route>
        <Route path="/certificate">
          <SertificatePage/>
        </Route>
        </Switch>
      </Container>
       <FooterPage/>
      </>
  );
}

export default App;
