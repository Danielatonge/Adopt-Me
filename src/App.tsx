import { StrictMode, lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <Suspense fallback={<h2>loading route.. </h2>}>
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1>Adopt Me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Provider>
    </StrictMode>
  );
};

export default App;
