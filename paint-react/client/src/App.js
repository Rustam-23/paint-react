import "./styles/app.scss";
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {

  const x = Math.random() * 10000;
  const id = Math.round(x);
  
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/:id" element={
            <>
              <Toolbar />
              <SettingBar />
              <Canvas />
            </>
          }>
          </Route>
          <Route path="*" element={(<Navigate replace to={`f${id}`} />)} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
