import './App.css'
import TrialForm from './TrialForm'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">✦ MyBrand</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get Started</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🚀 Now Live</span>
        <h1 className="hero-title">
          Build Something <span className="gradient-text">Amazing</span> Today
        </h1>
        <p className="hero-subtitle">
          We help businesses grow with modern tools, powerful design, and
          seamless experiences. Join thousands of happy customers.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get Started Free</a>
          <a href="#features" className="btn-secondary">Learn More →</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glow-circle" />
      </div>
    </section>
  )
}

const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed and performance right out of the box.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Enterprise-grade security so your data stays protected.' },
  { icon: '🎨', title: 'Beautiful Design', desc: 'Professionally crafted UI that your users will love.' },
  { icon: '📊', title: 'Powerful Analytics', desc: 'Gain deep insights with real-time data dashboards.' },
  { icon: '🌐', title: 'Global CDN', desc: 'Your content delivered fast anywhere in the world.' },
  { icon: '🤝', title: '24/7 Support', desc: 'Our team is always here to help you succeed.' },
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Everything You Need</h2>
        <p>Packed with features designed to accelerate your growth.</p>
      </div>
      <div className="features-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <h2>Register for a Trial Class</h2>
        <p>Sign your child up today — spots fill fast!</p>
      </div>
      <TrialForm />
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </>
  )
}
