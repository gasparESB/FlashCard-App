import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import DeckPage from '../pages/DeckPage'

const Routers = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="deck/:id" element={<DeckPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routers
