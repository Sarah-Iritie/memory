import './App.scss';
import GameBoard from '../Gameboard/Gameboard';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    // Clear timeout
    return () => clearTimeout(loadingDelay);
  }, []);

  return (
    <div className="container">
      {!isLoading && <h1>Memory Card Game</h1>}
      <GameBoard setIsLoading={setIsLoading} />
      <Footer />
    </div>
  );
}

export default App;
