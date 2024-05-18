
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/blog/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Addblog from "./pages/blog/Addblog"
import Editblog from "./pages/blog/Editblog"
import Singleproductpage from "./pages/blog/components/singlepage/Singleproductpage"
import { Provider } from "react-redux"
import store from "../store/store"
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
      <Route path="/blog/create" element={<Addblog/>}> </Route>
      <Route path="/blog/edit/:id" element={<Editblog/>}> </Route>
      <Route path="/blog/:id" element={<Singleproductpage/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </Provider>
  )
}

export default App
