import style from '@/components/blocks/AddNewTodo/style.module.scss'
import { Button } from '@/components/shared/Button/Button'
import { Input } from '@/components/shared/Input/Input'
import { todoStore } from '@/store/todoStore'
import { Status } from '@/types/todo.interface'
import { cn } from '@/utils/cn'
import React, { ChangeEvent, useState } from 'react'
interface Props {
	className?: string
}

export const AddNewTodo: React.FC<Props> = ({ className }) => {
	const [value, setValue] = useState<string>('')
	const handleAddTodo = () => {
		if (!value) return
		const newTodo = {
			id: Date.now(),
			text: value,
			status: Status.ACTIVE,
		}

		todoStore.addTodo(newTodo)
		setValue('')
	}

	const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	return (
		<div className={cn(className, style.add_new_todo)}>
			<Input
				onChange={handleValue}
				className={style.input}
				placeholder='123'
				value={value}
			/>
			<Button onClick={handleAddTodo}>
				<p>Add</p>
			</Button>
		</div>
	)
}
