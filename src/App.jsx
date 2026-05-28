import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import TrialForm from './TrialForm'
import { AREAS } from './areas'

const LOGO_URL = '/logo.png'

function FormPage({ area }) {
  const areaData = AREAS[area]
  if (!areaData) return <Navigate to="/trial-area-a" replace />

  return (
    <div className="page">
      <div className="page-header">
        <img src={LOGO_URL} alt="Ebright logo" className="logo" />
      </div>
      <div className="form-wrapper">
        <TrialForm branches={areaData.branches} />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trial-class-a" element={<FormPage area="a" />} />
        <Route path="/trial-class-b" element={<FormPage area="b" />} />
        <Route path="/trial-class-c" element={<FormPage area="c" />} />
        <Route path="*" element={<Navigate to="/trial-class-a" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
