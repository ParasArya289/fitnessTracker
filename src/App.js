import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/exercises" element={<h1>Exercises</h1>}/>
          <Route path="/foods" element={<h1>Foods</h1>}/>
          <Route path="/goals" element={<h1>Goals</h1>}/>
          <Route path="*" element={<h1>Page does not exist</h1>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
