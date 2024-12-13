import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = item
  return (
    <>
      <Link to={`/jobs/${id}`} className="link">
        <li className="card-container">
          <div>
            <div className="title-container">
              <img
                src={companyLogoUrl}
                alt="company logo"
                className="company-logo"
              />
              <div className="rating-container">
                <h1 className="title-h1">{title}</h1>
                <div className="star-container">
                  <AiFillStar className="star-icon" />
                  <p className="rating">{rating}</p>
                </div>
              </div>
            </div>
            <div className="job-details-container">
              <div className="loc-job-type-container">
                <div className="icon-container">
                  <MdLocationOn className="location-icon" />
                  <p className="location">{location}</p>
                </div>

                <div className="icon-container">
                  <BsBriefcaseFill className="location-icon" />
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>
              <div>
                <p className="pkg">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            <h1 className="desc-heading">Description</h1>
            <p className="desc">{jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobCard
