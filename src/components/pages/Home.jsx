import React from "react";
import "../../index.css";

function Home() {
  return (
    <>
      <div className="homeWrapper">
        <main className="homeHeader">
          <img
            src="./public/img/0_home_bg/homeBg_1.png"
            className="background"
          />
          <img
            src="./public/img/0_home_bg/homeBg_2.png"
            className="foreground"
          />
          <h1>Facundo Santana</h1>
          <h2>Portfolio</h2>
        </main>
      </div>
    </>
  );
}

export default Home;

// HOME COMPONENT WITHOUT PARALLAX
// function Home() {
//   return (
//     <div id="home">
//       <main>
//         <h1>Facundo Santana</h1>
//         <h2>Portfolio</h2>
//       </main>
//     </div>
//   );
// }

// export default Home;
