import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State to track whether the clue is visible or not
  const [clueVisible, setClueVisible] = useState(false);

  // Effect hook to dynamically render the clue
  useEffect(() => {
    // Wait for the component to mount, then render the hidden clue
    const timeout = setTimeout(() => {
      setClueVisible(true); // Reveal the clue after some delay
    }, 3000); // Adjust the timeout as per need

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="App">
      <h1>Find the Hidden SQL Clue</h1>
      <p className="random-clue">
        "The SQL hint is hidden somewhere nearby your desk."
      </p>

      <div className={`hidden-location ${clueVisible ? "show" : ""}`}>
        The hint note is behind your PC.
      </div>

      <p className="instructions">
        Use <b>Developer Tools (F12)</b> to change the CSS properties of the <code>hidden-location</code> class and uncover the hidden message.
      </p>
    </div>
  );
}

export default App;




// import './App.css';
// // import Footer from './Components/Layout/Footer';
// // import Header from './Components/Layout/Header';

// // import SidebarMenu from './Pages/Dashboard';
// import MyRoute from './Router/router';

// function App() {
//   return (
//    <>
//    {/* <Header/> */}
//    <MyRoute/>
//    {/* <Footer/> */}
//    {/* <SidebarMenu/> */}
//    </>
  
//   );
// }

// export default App;
