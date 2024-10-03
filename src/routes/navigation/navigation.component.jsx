import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartDropdownActive } = useContext(CartContext)

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
              <CartIcon/>
          </div>
          { isCartDropdownActive && <CartDropdown/> }          
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation