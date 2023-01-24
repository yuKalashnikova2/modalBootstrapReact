const Header = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-md-center pb-3 mb-5 mt-4 border-bottom">
      <h1 className="h4">
        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
          <img className="d-inline-block me-2" width="40" height="32"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-black.svg" alt="Bootstrap" />
          <span>Parcel</span>
        </a>
      </h1>
      <a href="https://github.com/twbs/examples/tree/main/parcel/" target="_blank" rel="noopener">View on GitHub</a>
    </header>
  )
}

export default Header
