import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Loader from "./Pages/Home/Loader";

const Home = lazy(() => import("./Pages/Home/Homescreen"));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = 8000; // Increase the delay to 8 seconds

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <div className="App">
      <Router basename="/">
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>{loading ? <Loader /> : null}</div>}>
                  <Home />
                </Suspense>
              }
            ></Route>

            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
