import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/privateRoute'
import { ContextToken } from './utils/contextTokenPayload'
import { AccessTokenPayloadDTO } from './services/auth'
import Header from './components/header'
import NotFoundPage from './components/notFoundPage'
import Delivery from './routes/deliveries/delivery'
import Deliveries from './routes/deliveries'
import Complain from './routes/complaints'
import Home from './routes/home'
import Reports from './routes/reports'
import Report from './routes/reports/report'
import Subscribe from './routes/subscribe'
import * as authService from './services/authService'
import Complaints from './routes/complaints'
import Complaint from './routes/complaints/complaint'


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
            <Route path="complaints" element={<PrivateRoute roles={['ROLE_USER', 'ROLE_ADMIN', 'ROLE_VISITOR']}><Complaints /></PrivateRoute>} >
              <Route path=":complaintId" element={<Complaint />} />
            </Route>
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
