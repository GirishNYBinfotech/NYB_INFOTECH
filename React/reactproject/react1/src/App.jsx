import Portalpage from "../../../react/vite-project/src/pages_09-07-2026/Task_30-07-2026/Portalpage"

function App() {
  return (
    <BrowserRouter>
  <Routes>
     <Route path='/portal' element={<Portalpage/>}/>
  </Routes>
  </BrowserRouter>
   )
}

export default App