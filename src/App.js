import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Exercises } from "./Pages/Exercises/Exercises";
import { Foods } from "./Pages/Foods/Foods";
import { Goals } from "./Pages/Goals/Goals";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="*" element={<h1>Page does not exist</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
