import React, { InputHTMLAttributes } from 'react'

import style from '@/components/shared/Input/style.module.scss'
import { cn } from '@/utils/cn'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	textColor?: string
}

export const Input: React.FC<Props> = ({ className, textColor, ...props }) => {
	return (
		<input
			className={cn(
				className,
				textColor === 'black' && style.input__black,
				style.input
			)}
			{...props}
		/>
	)
}
