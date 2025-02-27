import {withRouter, Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="nav-container">
      <ul className="content-container">
        <li className="logo-con">
          <Link to="/" className="link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo"
            />
          </Link>
        </li>
        <li className="link-container">
          <Link to="/" className="link">
            <h1 className="content">Home</h1>
            <AiFillHome className="icon" />
          </Link>
          <Link to="/jobs" className="link">
            <h1 className="content">Jobs</h1>
            <BsBriefcaseFill className="icon" />
          </Link>
        </li>
        <li>
          <FiLogOut className="icon" onClick={onClickLogout} />
          <button type="button" onClick={onClickLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Header)
//  <div className="header-container">
//       <ul className="list-container">
//         <li className="logo-container">
//           <Link to="/" className="nav-link">
//             <img
//               className="logo"
//               alt="website logo"
//               src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//             />
//           </Link>
//         </li>
//         <li className="nav-links-container">
//           <Link to="/" className="nav-link">
//             <h1 className="nav-to-name">Home</h1>
//             <AiFillHome className="nav-icon" />
//           </Link>
//           <Link to="/jobs" className="nav-link">
//             <h1 className="nav-to-name">Jobs</h1>
//             <BsBriefcaseFill className="nav-icon" />
//           </Link>
//         </li>
//         <li className="nav-button-container">
//           <FiLogOut className="nav-icon" onClick={onClickLogout} />
//           <button
//             className="logout-button"
//             type="button"
//             onClick={onClickLogout}
//           >
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
