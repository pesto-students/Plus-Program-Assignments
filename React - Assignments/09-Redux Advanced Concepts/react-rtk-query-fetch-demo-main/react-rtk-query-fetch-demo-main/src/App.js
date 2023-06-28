import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import PostsList from './features/posts/PostsList'

function App() {
  return (
    <div className="container">
      <div className="d-flex border-bottom pt-2 pb-2 mb-5">
        <div className="p-2 flex-grow-1 text-center">
          <strong>React Redux Retreive Data with RTK Query Example</strong>
        </div>
      </div>

      <div className="row">
        <PostsList />
      </div>
    </div>
  )
}

export default App
