import style from '@/components/shared/Button/style.module.scss'
import { cn } from '@/utils/cn'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: React.ReactNode
}

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
	return (
		<button {...props} className={cn(className, style.button)}>
			{children}
		</button>
	)
}
