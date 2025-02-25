import '@/app.scss'
import { AddNewTodo } from '@/components/blocks/AddNewTodo/AddNewTodo'
import { FilterButtons } from '@/components/blocks/FilterButtons/FilterButtons'
import { Todos } from '@/components/blocks/Todos/Todos'
import { cn } from '@/utils/cn'
import React from 'react'
interface Props {
	className?: string
}

export const App: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className)}>
			<div className='modal'>
				<div className='background'></div>
				<div className='content'>
					<h1 className='title'>Todo List</h1>
					<Todos />
					<AddNewTodo />
					<FilterButtons />
				</div>
			</div>
		</div>
	)
}
