const Modal = ({ children, ...props }) => {
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
           {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
