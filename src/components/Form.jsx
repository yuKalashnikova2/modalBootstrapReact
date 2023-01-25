import { useState } from "react"

const Form = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [keepMe, setKeepMe] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log({
      email,
      password,
      keepMe
    })
    

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4 fs-small">
        <div className="row">
          <div className="col-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={keepMe}
                onChange={(e) => setKeepMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Keep me sign in
              </label>
            </div>
          </div>
          <div className="col-6 text-end">
            <a href="#" className="link-primary">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </div>
      <div className="mt-4 text-muted fs-small">
        Don’t have an account?
        <a href="#" className="link-primary">
          Sign up now
        </a>
      </div>
    </form>
  )
}

export default Form
