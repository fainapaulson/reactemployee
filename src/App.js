import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Home from './components/Home';
import Edit from './components/Edit';
import View from './components/View';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNot from './components/PageNot';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='edit/:id' element={<Edit/>}></Route>
        <Route path='view/:id' element={<View/>}></Route>
        <Route path='*' element={<PageNot/>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
