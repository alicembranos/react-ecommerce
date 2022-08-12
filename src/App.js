import { BrowserRouter } from "react-router-dom";
import { AlbumsContextProvider } from "context/AlbumsContext";
import { UserContextProvider } from "context/UserContext";
import { GlobalContextProvider } from "context/GlobalContext";
import Router from "Router/Router";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <UserContextProvider>
      <AlbumsContextProvider>
        <GlobalContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </GlobalContextProvider>
      </AlbumsContextProvider>
    </UserContextProvider>
  );
};

export default App;
