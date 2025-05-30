import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/books/:id" element={<h1>Dettaglio Pagina</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
