import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="not-found-bg-container">
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
      />
      <h1 className="h1">Page Not Found</h1>
      <p className="p1">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)
export default NotFound
