import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import Header from './components/Header.js';
import Loader from './components/Loader.js';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode on initial render
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    // <div className="App-"{isDarkMode ? "dark" : "light"}>
    <div className="App-">
      <Header isDarkMode setIsDarkMode />
      <body className="App-body">
        <Loader />
      </body>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }