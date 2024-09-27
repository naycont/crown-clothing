import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../context/user.context'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async () => {
    try {
      await signOutUser()
    } catch (error) {
      console.error('error on signin out')
      console.error(error)
    }
  }

  return (
    <Fragment>
      <div className='navigation'>
          <Link className='logo-container' to='/'>
              <CrownLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>Shop</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
              {
                currentUser
                ? <span className='nav-link' onClick={signOutHandler}> Sign out</span>
                : <Link className='nav-link' to='/auth'>Sign in</Link>
              }
          </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation