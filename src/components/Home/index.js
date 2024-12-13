import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.push('/jobs')
  }
  return (
    <div>
      <Header />
      <div className="home-bg-container">
        <h1 className="h-heading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="h-desc">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="jobs-link" to="/jobs">
          <button type="button" onClick={onClickFindJobs} className="jobs-btn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
