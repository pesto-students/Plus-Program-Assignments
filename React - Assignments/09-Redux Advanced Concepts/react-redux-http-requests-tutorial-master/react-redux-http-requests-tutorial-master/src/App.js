import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Users from './features/users/Users'

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1">Redux Store</div>
        <div>
          <div>
            <a className="nav-link" aria-current="page" href="#">
              Users
            </a>
          </div>
        </div>
      </div>
      <Users />
    </div>
  )
}

export default App
