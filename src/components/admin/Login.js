import Logo from '../Logo'

export default function Body() {
  return (
    <div className="container" id="auth">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <Logo />
            <h5 className="auth-type">Admin Login</h5>
          </div>
          <div className="card-body">
            <div className="col-sm flex">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" hidden>Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                  <small id="emailHelp" className="form-text text-muted" hidden>We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" hidden>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-info text-white btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}