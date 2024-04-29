import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Reports from './routes/reports'
import Home from './routes/home'
import Subscribe from './routes/subscribe'
import Report from './routes/reports/report'
import NotFoundPage from './components/notFoundPage'
import LoggedInHeader from './components/loggedInHeader'
import { PrivateRoute } from './components/privateRoute'
import Complain from './routes/complain'
import Delivery from './routes/deliveries'
import Deliveries from './routes/deliveries'
import { AccessTokenPayloadDTO } from './services/auth'
import { ContextToken } from './utils/contextTokenPayload'
import { useEffect, useState } from 'react'
import * as authService from './services/authService'

function App() {

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, [])

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="reports" element={<PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN']}><Reports /></PrivateRoute>} >
              <Route path=":reportId" element={<Report />} />
            </Route>
            <Route path="complains" element={<PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN', 'ROLE_VISITOR']}><Complain /></PrivateRoute>} />
            <Route path="deliveries" element={<PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN', 'ROLE_VISITOR']}><Deliveries /></PrivateRoute>} >
              <Route path=":deliveryId" element={<Delivery />} />
            </Route>
            <Route path="subscribe" element={<PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN']}><Subscribe /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </ContextToken.Provider>
  )
}

export default App
