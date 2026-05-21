import './App.css'
import TrialForm from './TrialForm'

const LOGO_URL = 'https://drive.google.com/uc?export=view&id=1Lqhqp2G9ycW1WrDT7iB3HXHc7WYS3eSb'

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
