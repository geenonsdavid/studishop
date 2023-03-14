import './App.css';
import { FormDelivery, CardArticle, ListArticles, Counter, Advice} from './Components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import fakeArticle from './assets/fakearticles.json';

function App() {

 
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/advice" element={<Advice/>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/formDelivery" element={<center><FormDelivery /></center>} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="ListArticles" element={<ListArticles fakeArticle={fakeArticle} CardArticle={CardArticle} />} />
          <Route path="CardArticle" element={<CardArticle article={fakeArticle.Vegetarian[0]} />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
