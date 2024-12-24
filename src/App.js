import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [clueVisible, setClueVisible] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setClueVisible(true); 
    }, 10800000); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="App">
      <h1>Be a Front END Developer to get your NEXT Clue</h1>
      <p className="random-clue">
        "The SQL hint is hidden somewhere in this page"
      </p>

      <div className={`hidden-location ${clueVisible ? "show" : ""}`}>
        The hint note is behind your PC.
      </div>

      <p className="instructions">
        Use <b>Developer Tools </b> to change the CSS properties of the <code>hidden-location</code> class and uncover the hidden message.
      </p>
           <p className="instructions">
        If failed to solve wait for <b>3</b> hours the clue will automatically pop up here
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
