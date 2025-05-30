import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
