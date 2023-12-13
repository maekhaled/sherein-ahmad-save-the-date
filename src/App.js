import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Click card to open</p>

      <div class="card__container js-card-opener">
        <div class="card">
          <div class="card__panel card__panel--front">
            <h1>Hello!</h1>
          </div>
          <div class="card__panel card__panel--inside-left"></div>
          <div class="card__panel card__panel--inside-right">
            <p>Happy everything!</p>
            <p>Your friend, Tammy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
