import { Suspense } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Login } from "./pages/public/Login"
import { Main } from "./pages/public/Main"
import Notfound from "./pages/public/Notfound"
import { Register } from "./pages/public/Register"
import { Public } from "./routes/routes"

function App() {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Notfound>
            <Route path="/" element={<Navigate to={Public.Main} />} />
            <Route path={Public.Login} element={<Login />}/>
            <Route path={Public.Register} element={<Register />}/>
            <Route path={`${Public.Main}/*`} element={<Main />} />
          </Notfound>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
