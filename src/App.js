import { BrowserRouter as ReactRouter  } from "react-router-dom";
import Router from "./router";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <ReactRouter>
        <Layout>
          <Router />
        </Layout>
      </ReactRouter>
  );
}

export default App;
