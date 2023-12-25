import "./App.css";
import pngEgg from "./assets/pngegg.png";
import christmasTree from "./assets/Christmas-Tree-with-Presents-Clipart.png";
import cuteSanta from "./assets/cute-santa.png";
import cuteReindeer from "./assets/cute-reindeer.png";

const stars = new Array(100).fill(0).map((s) => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3,
    animationTime: Math.random() * 3,
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
        <img src={pngEgg} width="100%" height="100%" />
        <div className="content">
          <p>Giáng sinh vui vẻ</p>
          <p>Thùy Thùy =))</p>
        </div>
      </div>
      <img
        src={christmasTree}
        alt="Giáng sinh vui vẻ"
        width={500}
        height={500}
      />
      <img className="cute-santa" src={cuteSanta} alt="cute-santa" />
      <img className="cute-reindeer" src={cuteReindeer} alt="cute-reindeer" />
    </div>
  );
}

export default App;
