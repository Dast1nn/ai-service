import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Header } from '@/components/layout/Header'
import { Testimonials } from '@/components/Testimonials'
export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Features />
			<Testimonials />
			<Footer />
		</main>
	)
}
