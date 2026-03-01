import Link from 'next/link'
import { SocialNetworks } from '../SocialNetworks'
import { Container } from './Container'

export function Header() {
	return (
		<header>
			<Container className='flex items-center justify-between mt-6'>
				<Link
					href='/'
					className='text-2xl font-black tracking-wide bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_75%,#D94FD5_100%)]
					bg-clip-text text-transparent'
				>
					AI Service
				</Link>
				<nav className='hidden md:flex items-center gap-9 text-sm font-medium'>
					<a
						href='#features'
						className='text-lg  hover:text-purple-400 transition-colors'
					>
						Features
					</a>
					<a
						href='#reviews'
						className=' text-lg hover:text-purple-400 transition-colors'
					>
						Reviews
					</a>
					<a
						href='#contact'
						className='text-lg hover:text-purple-400 transition-colors'
					>
						Contact
					</a>
				</nav>
				<div className='hidden lg:flex items-center gap-5'>
					<SocialNetworks />
				</div>
				<button className='md:hidden'>☰</button>
			</Container>
		</header>
	)
}
