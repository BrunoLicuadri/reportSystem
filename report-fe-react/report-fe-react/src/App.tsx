import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Reports from './components/reports'
import Home from './routes/home'
import Subscribe from './routes/subscribe'
import Report from './components/reports/report'
import NotFoundPage from './components/notFoundPage'
import LoggedInHeader from './components/loggedInHeader'
import { PrivateRoute } from './components/privateRoute'
import Complain from './routes/complain'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        <Route path="/" element={<LoggedInHeader />} >
          <Route path="reports" element={ <PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN']}><Reports /></PrivateRoute> } >
            <Route path=":reportId" element={<Report />} />
          </Route>
          <Route path="complains" element={ <PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN', 'ROLE_VISITOR']}><Complain /></PrivateRoute>} />
          <Route path="subscribe" element={ <PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN']}><Subscribe /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
