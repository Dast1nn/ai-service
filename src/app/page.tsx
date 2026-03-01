import { Features } from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { Suspense } from 'react'
export default function Home() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
			</Suspense>
			<Features />
			<Testimonials />
		</div>
	)
}
