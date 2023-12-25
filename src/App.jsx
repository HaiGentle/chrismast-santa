import { useEffect, useState } from "react";
import "./App.css";

const stars = new Array(100).fill(0).map((s) => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3,
    animationTime: Math.random() * 3,
  };
});

const meteors = new Array(10).fill(0).map((s) => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3,
  };
});

function App() {
  return (
    <div className="app">
      <div>
        {stars.map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              animation: `twinkle ${s.animationTime}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="santa">
        <img src="./src/assets/pngegg.png" width="100%" height="100%" />
        <div className="content">
          <p>Giáng sinh vui vẻ</p>
          <p>Thỳ Thỳ =))</p>
        </div>
      </div>
      <img
        src="./src/assets/Christmas-Tree-with-Presents-Clipart.png"
        alt="Giáng sinh vui vẻ"
        width={500}
        height={500}
      />
      <img
        className="cute-santa"
        src="./src/assets/cute-santa.png"
        alt="cute-santa"
      />
      <img
        className="cute-reindeer"
        src="./src/assets/cute-reindeer.png"
        alt="cute-reindeer"
      />
    </div>
  );
}

export default App;
