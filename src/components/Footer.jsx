const Footer = (props) => {
  return (
    <>
      <hr className="col-1 my-5 mx-0" />

      <h2>Guides</h2>
      <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
      <ul className="icon-list">
        <li><a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">Bootstrap quick start guide</a></li>
        <li><a href="https://getbootstrap.com/docs/5.2/getting-started/webpack/">Bootstrap Webpack guide</a></li>
        <li><a href="https://getbootstrap.com/docs/5.2/getting-started/parcel/">Bootstrap Parcel guide</a></li>
        <li><a href="https://getbootstrap.com/docs/5.2/getting-started/vite/">Bootstrap Vite guide</a></li>
        <li><a href="https://getbootstrap.com/docs/5.2/getting-started/build-tools/">Contributing to Bootstrap</a></li>
      </ul>

      <hr className="mt-5 mb-4" />

      <p className="text-muted">Created and open sourced by the Bootstrap team. Licensed MIT.</p>
    </>
  )
}

export default Footer
