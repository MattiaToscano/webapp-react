import DefaultLayout from "./layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"
import CreateFilmsPage from "./pages/CreateFilmsPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContext from "./context/globalContext"

function App() {

  const [isLoading, setIsLoading] = useState(false);



  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="movies/create" element={<CreateFilmsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
