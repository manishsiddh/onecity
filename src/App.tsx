const departments = [
  { icon: '🛠️', name: 'Home Services', detail: 'Electrician, plumber, AC repair and more' },
  { icon: '🏠', name: 'Property', detail: 'Homes for rent, PGs and hostels' },
  { icon: '🚨', name: 'Emergency', detail: 'Important contacts and nearby help' },
  { icon: '🏛️', name: 'Government Help', detail: 'Schemes, eligibility and official links' },
]

export default function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="OneCity home">
          <span className="brand-mark">O</span>
          <span>OneCity</span>
        </a>
        <button className="location-button" type="button">📍 Jaipur, Rajasthan</button>
      </header>

      <section className="hero">
        <span className="eyebrow">YOUR CITY. EVERYTHING YOU NEED.</span>
        <h1>City life, made <span>easier.</span></h1>
        <p>Find trusted local services, homes and essential city information in one place.</p>
        <form className="search" onSubmit={(event) => event.preventDefault()}>
          <span aria-hidden="true">⌕</span>
          <input aria-label="Search OneCity" placeholder="What do you need today?" />
          <button type="submit">Search</button>
        </form>
        <small>Start with a service, a place to stay or essential city help.</small>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow">EXPLORE ONECITY</span><h2>What do you need today?</h2></div>
          <span className="city-label">Launching in Jaipur</span>
        </div>
        <div className="department-grid">
          {departments.map((item) => (
            <article className="department-card" key={item.name}>
              <span className="department-icon">{item.icon}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer>© {new Date().getFullYear()} OneCity. Your City. Everything You Need.</footer>
    </main>
  )
}