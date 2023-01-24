const Modal = (props) => {
  return (
    <div className="modal fade" {...props} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="position-absolute top-0 end-0 p-2">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-header justify-content-center">
            <p className="modal-title h1" id="exampleModalLabel">Welcome back.</p>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter e-mail" />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
              </div>
              <div className="mb-4 fs-small">
                <div className="row">
                  <div className="col-6">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Keep me sign in</label>
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <a href="#" className="link-primary">Forgot password?</a>
                  </div>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              </div>
              <div className="mt-4 text-muted fs-small">
                Don’t have an account? <a href="#" className="link-primary">Sign up now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
