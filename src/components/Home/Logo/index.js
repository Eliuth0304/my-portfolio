import Animated from '../../Animation/Animation'
import './index.scss'
import Pic from '../../../assets/images/2.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <Animated />

      <img
        className="solid-logo"
        src={Pic}
        alt="JavaScript,  Developer"
        height={'50%'}
      />
    </div>
  )
}

export default Logo
