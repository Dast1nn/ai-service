import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
export function SocialNetworks() {
	return (
		<>
			<Link
				href='https://github.com'
				target='_blank'
				aria-label='GitHub'
				className='hover:text-purple-400 transition'
			>
				<FaGithub size={20} />
			</Link>
			<Link
				href='https://linkedin.com'
				target='_blank'
				aria-label='LinkedIn'
				className='hover:text-purple-400 transition'
			>
				<FaLinkedin size={20} />
			</Link>

			<Link
				href='https://instagram.com'
				target='_blank'
				aria-label='Instagram'
				className='hover:text-purple-400 transition'
			>
				<FaInstagram size={20} />
			</Link>
			<Link
				href='https://twitter.com'
				target='_blank'
				aria-label='Twitter'
				className='hover:text-purple-400 transition'
			>
				<FaTwitter size={20} />
			</Link>
		</>
	)
}
