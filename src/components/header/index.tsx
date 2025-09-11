'use client'
import { Image } from '../common/image'
import logo from '../../../public/logo.svg'
import { Link } from '../common/link'

const Header = () => {
  return (
    <div className="h-[80px] border-b-[1px] border-solid border-primary flex justify-between items-center px-6">
      <Link href='/'>
      <Image
        src={logo}
        alt="Description of the image"
        width={40}
        height={40}
        onClick={console.log}
      /></Link>
    </div>
  )
}

export default Header
