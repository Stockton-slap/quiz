'use client'
import { Image } from '../common/image'
import logo from '../../../public/logo.svg'

const Header = () => {
  return (
    <div className="h-[80px] border-b-[1px] border-solid border-primary flex justify-between items-center px-6">
      <Image
        src={logo}
        alt="Description of the image"
        width={40}
        height={40}
        onClick={console.log}
      />
    </div>
  )
}

export default Header
