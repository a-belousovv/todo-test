import style from '@/components/blocks/Todo/style.module.scss'
import { Input } from '@/components/shared/Input/Input'
import { todoStore } from '@/store/todoStore'
import { ITodo, Status } from '@/types/todo.interface'
import { cn } from '@/utils/cn'
import React, { ChangeEvent } from 'react'
interface Props {
	className?: string
	todo: ITodo
}

export const Todo: React.FC<Props> = ({ className, todo }) => {
	const handleStatus = (event: ChangeEvent<HTMLInputElement>) => {
		todoStore.changeTodoStatus({
			id: todo.id,
			status: event.target.checked ? Status.COMPLETED : Status.ACTIVE,
		})
	}
	return (
		<div
			className={cn(
				className,
				style.todo,
				todo.status == Status.COMPLETED && style.completed
			)}
		>
			<p className={style.todo__text}>{todo.text}</p>
			<Input
				onChange={handleStatus}
				checked={todo.status == Status.COMPLETED}
				type='checkbox'
				className={style.todo__checkbox}
			/>
		</div>
	)
}
