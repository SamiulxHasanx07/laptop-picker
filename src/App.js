import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Qna from './components/Qna/Qna';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qna></Qna>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
