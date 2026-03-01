import Image from 'next/image'

export function Hero() {
	return (
		<section className='relative min-h-screen overflow-hidden  text-white'>
			<div className='relative z-10 mx-auto max-w-5xl pt-20 text-center'>
				<h1
					className='mb-6 text-6xl font-normal tracking-tight
					bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_75%,#D94FD5_100%)]
					bg-clip-text text-transparent'
				>
					THE BEST WEBSITE EVER
				</h1>

				<h2 className='mb-6 text-6xl font-light'>Scalable.</h2>

				<p className='mx-auto mb-10 max-w-2xl text-lg text-gray-300'>
					Our technology performing fast blockchain (120K TPS) and it has
					guaranteed AI-based data security. Proof of Stake enables unlimited
					speeds.
				</p>

				<div className='flex justify-center gap-4'>
					<div className='rounded-full p-[1.5px] bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]'>
						<button className='h-14 rounded-full bg-black px-8'>
							Get started
						</button>
					</div>

					<button className='h-14 rounded-full border border-white px-8  '>
						Read more
					</button>
				</div>
			</div>

			<div className='pointer-events-none absolute  -bottom-20 left-[50.8%] w-350 max-w-none -translate-x-1/2'>
				<Image
					src='/back.webp'
					alt='Hero visual'
					width={1400}
					height={800}
					className='object-contain'
					priority
					sizes='(max-width: 768px) 100vw, 1400px'
				/>
			</div>
		</section>
	)
}
