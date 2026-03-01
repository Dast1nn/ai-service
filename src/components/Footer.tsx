import Link from 'next/link'
import { SocialNetworks } from './SocialNetworks'
export function Footer() {
	return (
		<footer
			id='contact'
			className='border-t border-white/10 bg-black text-white'
		>
			<div className='mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3'>
				<div>
					<h3 className='mb-4 text-xl font-semibold'>AI Platform</h3>
					<p className='text-gray-200'>
						Next-generation scalable blockchain infrastructure.
					</p>
				</div>
				<div>
					<h4 className='mb-4 font-medium'>Navigation</h4>
					<ul className='space-y-2 text-gray-200'>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='#'>Features</Link>
						</li>
						<li>
							<Link href='#'>Pricing</Link>
						</li>
						<li>
							<Link href='#'>Contact</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className='mb-4 font-medium'>Contacts</h4>
					<ul className='space-y-2 text-gray-200'>
						<li>Email: hello@platform.ai</li>
						<li>Phone: +1 234 567 890</li>
						<li>Almaty, Kazakhstan</li>
					</ul>
				</div>
			</div>

			<div className='border-t border-white/10 py-6 '>
				<div
					className='mx-auto  max-w-6xl  px-4 py-16 flex flex-col gap-6
	md:flex-row md:items-center md:justify-between'
				>
					<div className='flex gap-6 text-white font-semibold'>
						<h3>Privacy Policy</h3>
						<h3>Terms & Conditions</h3>
						<h3>Code of Conduct</h3>
					</div>
					<div className='flex gap-4'>
						<SocialNetworks />
					</div>
				</div>
				<div className='text-center text-sm text-gray-500'>
					© {new Date().getFullYear()} AI Platform. All rights reserved.
				</div>
			</div>
		</footer>
	)
}
