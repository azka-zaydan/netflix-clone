import { FC, useEffect, useState } from "react"
import { SearchIcon, BellIcon } from '@heroicons/react/solid'
import Link from "next/link"
function Header() {

    const [isScrolled, setIsSCrolled] = useState(false)

    useEffect(() => {
        const handleSCroll = () => {
            if (window.screenY > 0) {
                setIsSCrolled(true)
            } else {
                setIsSCrolled(false)
            }
        }
        window.addEventListener('scroll', handleSCroll)
        return () => {
            window.removeEventListener('scroll', handleSCroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && "bg-[#141414]"}`}>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex f">
                    <li className="HeaderLink">Home</li>
                    <li className="HeaderLink">Tv Shows</li>
                    <li className="HeaderLink">Movies</li>
                    <li className="HeaderLink">New & Popular</li>
                    <li className="HeaderLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className='hidden h-6 w-6 sm:inline' />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href='/account'>
                    <img src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded" />
                </Link>
            </div>
        </header>
    )
}

export default Header