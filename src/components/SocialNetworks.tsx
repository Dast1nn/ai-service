import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
export function SocialNetworks() {
	return (
		<>
			<Link
				href='https://github.com'
				target='_blank'
				aria-label='GitHub'
				className='hover:text-purple-400 transition'
			>
				<Github size={20} />
			</Link>
			<Link
				href='https://linkedin.com'
				target='_blank'
				aria-label='LinkedIn'
				className='hover:text-purple-400 transition'
			>
				<Linkedin size={20} />
			</Link>

			<Link
				href='https://instagram.com'
				target='_blank'
				aria-label='Instagram'
				className='hover:text-purple-400 transition'
			>
				<Instagram size={20} />
			</Link>
			<Link
				href='https://twitter.com'
				target='_blank'
				aria-label='Twitter'
				className='hover:text-purple-400 transition'
			>
				<Twitter size={20} />
			</Link>
		</>
	)
}
