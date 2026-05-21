import './App.css'
import TrialForm from './TrialForm'

const LOGO_URL = 'PLACEHOLDER'

export default function App() {
  return (
    <div className="page">
      <div className="page-header">
        {LOGO_URL !== 'PLACEHOLDER' && (
          <img src={LOGO_URL} alt="Ebright logo" className="logo" />
        )}
      </div>
      <div className="form-wrapper">
        <TrialForm />
      </div>
    </div>
  )
}
