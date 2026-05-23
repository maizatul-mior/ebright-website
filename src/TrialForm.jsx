import { useState, useEffect } from 'react'
import './TrialForm.css'

const THANK_YOU_URL = 'https://www.ebright.my/completeregistration'

export default function TrialForm({ branches = [] }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [numChildren, setNumChildren] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [utmData, setUtmData] = useState({})

  const [parentName, setParentName] = useState('')
  const [parentPhone, setParentPhone] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [childInputs, setChildInputs] = useState([])
  const [branch, setBranch] = useState('')
  const [remarks, setRemarks] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utm = {}
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(p => {
      const v = params.get(p)
      if (v) utm[p] = v
    })
    utm.landing_page_url = window.location.href
    utm.device_type = /mobile|android|iphone|ipad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    utm.lead_source = 'Website'
    const fbclid = params.get('fbclid')
    if (fbclid) utm.fbclid = fbclid
    const gclid = params.get('gclid')
    if (gclid) utm.gclid = gclid
    setUtmData(utm)
  }, [])

  const progress = (currentStep / 4) * 100

  const validate = () => {
    if (currentStep === 1) {
      const errs = {}
      if (!parentName.trim()) errs.parentName = 'Required'
      if (!parentPhone.trim()) errs.parentPhone = 'Required'
      if (!parentEmail.trim()) errs.parentEmail = 'Required'
      else if (!parentEmail.includes('@')) errs.parentEmail = 'Enter a valid email'
      setErrors(errs)
      return Object.keys(errs).length === 0
    }
    if (currentStep === 2) {
      if (numChildren === 0) { alert('Please select the number of children'); return false }
      return true
    }
    if (currentStep === 3) {
      for (let i = 0; i < childInputs.length; i++) {
        if (!childInputs[i].name.trim() || !childInputs[i].age) {
          alert(`Please fill in all details for Child ${i + 1}`)
          return false
        }
      }
      return true
    }
    if (currentStep === 4) {
      if (!branch) { setErrors({ branch: 'Please select a branch' }); return false }
      return true
    }
    return true
  }

  const nextStep = () => {
    if (!validate()) return
    if (currentStep === 2) {
      setChildInputs(
        Array.from({ length: numChildren }, (_, i) => childInputs[i] || { name: '', age: '' })
      )
    }
    setErrors({})
    setCurrentStep(s => s + 1)
  }

  const prevStep = () => {
    setErrors({})
    setCurrentStep(s => s - 1)
  }

  const updateChild = (index, field, value) => {
    setChildInputs(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const submitForm = async () => {
    if (!validate() || isSubmitting) return
    setIsSubmitting(true)

    // branch value IS the locationKey directly
    const selectedBranch = branches.find(b => b.value === branch)
    if (!selectedBranch) {
      alert('Invalid branch selected. Please select a valid branch.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      parentName,
      parentEmail,
      parentPhone,
      childrenCount: numChildren,
      children: childInputs,
      preferredBranch: selectedBranch.label,
      locationKey: selectedBranch.value,
      remarks: remarks || '',
      utm_source: utmData.utm_source || '',
      utm_medium: utmData.utm_medium || '',
      utm_campaign: utmData.utm_campaign || '',
      utm_content: utmData.utm_content || '',
      utm_term: utmData.utm_term || '',
      landing_page_url: utmData.landing_page_url || '',
      device_type: utmData.device_type || '',
      lead_source: utmData.lead_source || 'Website',
      fbclid: utmData.fbclid || '',
      gclid: utmData.gclid || '',
    }

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.error('Submission error:', err)
    }

    try {
      if (window.parent && window.parent !== window) {
        window.parent.location.href = THANK_YOU_URL
      } else {
        window.location.href = THANK_YOU_URL
      }
    } catch {
      window.top.location.href = THANK_YOU_URL
    }
  }

  return (
    <div className="trial-wrapper">
      <div className="trial-container">

        {/* ── Header ── */}
        <div className="trial-header">
          <h1>Trial Class</h1>
          <p>Registration</p>
          <div className="trial-progress-bar">
            <div className="trial-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="trial-form-content">

          {/* ── Step 1: Parent Details ── */}
          {currentStep === 1 && (
            <div className="trial-step">
              <div className="trial-form-group">
                <label>Parent's Name <span className="required">*</span></label>
                <input
                  type="text"
                  placeholder="Example: Jonathan Tan, Sara Yahya, Muthu"
                  value={parentName}
                  onChange={e => setParentName(e.target.value)}
                  className={parentName ? 'filled' : ''}
                />
                {errors.parentName && <span className="trial-error-msg">{errors.parentName}</span>}
              </div>

              <div className="trial-form-group">
                <label>Parent's Contact <span className="required">*</span></label>
                <input
                  type="tel"
                  placeholder="0123456789"
                  value={parentPhone}
                  onChange={e => setParentPhone(e.target.value)}
                  className={parentPhone ? 'filled' : ''}
                />
                <div className="trial-helper-text">
                  Reminders will be sent via WhatsApp, please make sure your number has WhatsApp function.
                </div>
                {errors.parentPhone && <span className="trial-error-msg">{errors.parentPhone}</span>}
              </div>

              <div className="trial-form-group">
                <label>Parent's Email <span className="required">*</span></label>
                <input
                  type="email"
                  placeholder="Example: Ebright@gmail.com"
                  value={parentEmail}
                  onChange={e => setParentEmail(e.target.value)}
                  className={parentEmail ? 'filled' : ''}
                />
                {errors.parentEmail && <span className="trial-error-msg">{errors.parentEmail}</span>}
              </div>

              <button className="trial-btn trial-btn-next" onClick={nextStep}>NEXT</button>
            </div>
          )}

          {/* ── Step 2: Number of Children ── */}
          {currentStep === 2 && (
            <div className="trial-step">
              <div className="trial-form-group">
                <label>How many children are joining?</label>
                <div className="trial-number-selector">
                  {[1, 2, 3, 4].map(n => (
                    <div
                      key={n}
                      className={`trial-number-btn${numChildren === n ? ' selected' : ''}`}
                      onClick={() => setNumChildren(n)}
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
              {numChildren > 0 && (
                <button className="trial-btn trial-btn-next" onClick={nextStep}>NEXT</button>
              )}
              <button className="trial-btn trial-btn-back" onClick={prevStep}>BACK</button>
            </div>
          )}

          {/* ── Step 3: Child Details ── */}
          {currentStep === 3 && (
            <div className="trial-step">
              <div className="trial-child-inputs">
                {childInputs.map((child, i) => (
                  <div className="trial-child-row" key={i}>
                    <h3>Child {i + 1}</h3>
                    <div className="trial-form-group">
                      <label>Child's Name <span className="required">*</span></label>
                      <input
                        type="text"
                        placeholder="Example: Adam Bin Nik"
                        value={child.name}
                        onChange={e => updateChild(i, 'name', e.target.value)}
                        className={child.name ? 'filled' : ''}
                      />
                    </div>
                    <div className="trial-form-group">
                      <label>Child's Age <span className="required">*</span></label>
                      <select
                        value={child.age}
                        onChange={e => updateChild(i, 'age', e.target.value)}
                        className={child.age ? 'filled' : ''}
                      >
                        <option value="">Select age</option>
                        <option value="7-9 years old">7-9 years old</option>
                        <option value="10-12 years old">10-12 years old</option>
                        <option value="13-16 years old">13-16 years old</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <button className="trial-btn trial-btn-next" onClick={nextStep}>NEXT</button>
              <button className="trial-btn trial-btn-back" onClick={prevStep}>BACK</button>
            </div>
          )}

          {/* ── Step 4: Branch & Remarks ── */}
          {currentStep === 4 && (
            <div className="trial-step">
              <div className="trial-form-group">
                <label>Preferred branch near you</label>
                <select
                  value={branch}
                  onChange={e => { setBranch(e.target.value); setErrors({}) }}
                  className={branch ? 'filled' : ''}
                >
                  <option value="">Please select</option>
                  {branches.map(b => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </select>
                {errors.branch && <span className="trial-error-msg">{errors.branch}</span>}
              </div>

              <div className="trial-form-group">
                <label>Remarks [If any]</label>
                <textarea
                  placeholder="Special needs (e.g. ADHD, autism)"
                  value={remarks}
                  onChange={e => setRemarks(e.target.value)}
                  className={remarks ? 'filled' : ''}
                />
              </div>

              <button
                className="trial-btn trial-btn-submit"
                onClick={submitForm}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'REDIRECTING...' : 'SUBMIT'}
              </button>
              <button className="trial-btn trial-btn-back" onClick={prevStep}>BACK</button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
