'use client'
import { features } from '@/constants/features'

export function Features() {
	return (
		<section id='features' className='bg-black text-white py-20'>
			<div className='mx-auto max-w-6xl px-4'>
				<h2 className='mb-16 text-center text-4xl font-normal'>
					Why Choose Us
				</h2>

				<div className='grid gap-10 md:grid-cols-3'>
					{features.map((feature, i) => {
						const Icon = feature.icon

						return (
							<div
								key={i}
								className='rounded-2xl border border-white/10 p-8 backdrop-blur
							transition-all duration-300 ease-out
						hover:border-purple-500/40
							hover:-translate-y-2	
							hover:shadow-2xl hover:shadow-purple-500/10'
							>
								<Icon className='mb-4 h-10 w-10 text-purple-400' />

								<h3 className='mb-3 text-xl font-medium'>{feature.title}</h3>

								<p className='text-gray-200'>{feature.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
