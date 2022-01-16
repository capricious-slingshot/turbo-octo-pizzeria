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
                  <label htmlFor="userName" hidden>Email address</label>
                  <input type="text" className="form-control" id="userName" aria-describedby="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" hidden>Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
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