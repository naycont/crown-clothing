import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'

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
      <NavigationContainer>
          <LogoContainer to='/'>
              <CrownLogo className='logo'/>
          </LogoContainer>
          <NavLinks>
              <NavLink to='/shop'>Shop</NavLink>
              <NavLink  to='/contact'>Contact</NavLink>
              {
                currentUser
                ? <NavLink as='span' onClick={signOutHandler}> Sign out</NavLink>
                : <NavLink to='/auth'>Sign in</NavLink>
              }
              <CartIcon/>
          </NavLinks>
          { isCartDropdownActive && <CartDropdown/> }          
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation