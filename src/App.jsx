import './App.css'
import TrialForm from './TrialForm'

const LOGO_URL = '/logo.png'

export default function App() {
  return (
    <div className="page">
      <div className="page-header">
        <img src={LOGO_URL} alt="Ebright logo" className="logo" />
      </div>
      <div className="form-wrapper">
        <TrialForm />
      </div>
    </div>
  )
}
