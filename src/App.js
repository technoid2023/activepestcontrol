import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Find the Hidden SQL Clue</h1>
      <p className="random-clue">
        "The SQL hint is hidden somewhere nearby your desk."
      </p>
      <div className="hidden-location">
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
