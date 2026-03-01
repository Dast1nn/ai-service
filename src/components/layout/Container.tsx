import React from 'react'
interface Props {
	className?: string
}

export function Container({
	children,
	className,
}: React.PropsWithChildren<Props>) {
	return (
		<div className={`mx-auto max-w-7xl ${className || ''}`}>{children}</div>
	)
}
