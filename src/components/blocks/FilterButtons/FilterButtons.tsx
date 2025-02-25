import style from '@/components/blocks/FilterButtons/style.module.scss'
import { Button } from '@/components/shared/Button/Button'
import { filterStore } from '@/store/filterStore'
import { todoStore } from '@/store/todoStore'
import { cn } from '@/utils/cn'
import { useUnit } from 'effector-react'
import React from 'react'
interface Props {
	className?: string
}

export const FilterButtons: React.FC<Props> = ({}) => {
	const filterValue = useUnit(filterStore.$filterValue)

	return (
		<div className={style.buttons}>
			<Button
				className={cn(filterValue === 'all' && style.active)}
				onClick={() => filterStore.handleFilter('all')}
			>
				<p>All</p>
			</Button>
			<Button
				className={cn(filterValue === 'active' && style.active)}
				onClick={() => filterStore.handleFilter('active')}
			>
				<p>Active</p>
			</Button>
			<Button
				className={cn(filterValue === 'completed' && style.active)}
				onClick={() => filterStore.handleFilter('completed')}
			>
				<p>Completed</p>
			</Button>
			<Button onClick={() => todoStore.clearCompleted()}>
				<p>Clear Completed</p>
			</Button>
		</div>
	)
}
