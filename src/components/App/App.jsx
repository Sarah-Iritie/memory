import './App.scss';
import GameBoard from '../Gameboard/Gameboard';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="container">
      <h1>Memory Card Game</h1>
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
