import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { DetailPage } from './pages/DetailPage/DetailPage';

import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
    <main className='main'>
      <div className='container'>
      <h1 className='heading'>Поиск GitHub</h1>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':id' element={<DetailPage />} />
      </Routes>
      </div>
    </main>
    </BrowserRouter>
  );
}
