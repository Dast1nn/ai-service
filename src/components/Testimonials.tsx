import { reviews } from '@/constants/reviews'
import { User } from 'lucide-react'
import Script from 'next/script'
export function Testimonials() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'AI Blockchain Platform',
		review: reviews.map(r => ({
			'@type': 'Review',
			author: {
				'@type': 'Person',
				name: r.name,
			},
			reviewBody: r.review,
			reviewRating: {
				'@type': 'Rating',
				ratingValue: r.rating,
				bestRating: '5',
			},
		})),
	}
	return (
		<section id='reviews' className='bg-black py-20 text-white'>
			<div className='mx-auto max-w-6xl px-4'>
				<h2 className='mb-16 text-center text-4xl font-normal'>
					What Users Say
				</h2>
				<div className='grid gap-8 md:grid-cols-3 '>
					{reviews.map((r, i) => (
						<div
							key={i}
							className='rounded-2xl border border-white/10 p-6 backdrop-blur
							transition-all duration-300 ease-out
						hover:border-purple-500/40
							hover:-translate-y-2	
							hover:shadow-2xl hover:shadow-purple-500/10'
						>
							<p className='mb-6 text-gray-300'>“{r.review}”</p>
							<div className='flex items-center gap-4 mt-4'>
								<User className=' text-purple-400' size={40} />
								<div>
									<p className='font-medium'>{r.name}</p>
									<p className='text-sm text-gray-500'>{r.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Script
				id='reviews-schema'
				type='application/ld+json'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
		</section>
	)
}
