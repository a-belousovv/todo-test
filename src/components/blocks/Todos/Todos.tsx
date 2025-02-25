import { Todo } from '@/components/blocks/Todo/Todo'
import style from '@/components/blocks/Todos/style.module.scss'
import { filterStore } from '@/store/filterStore'
import { todoStore } from '@/store/todoStore'
import { ITodo } from '@/types/todo.interface'
import { cn } from '@/utils/cn'
import { setTodosByFilter } from '@/utils/setTodosByFilter'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
interface Props {
	className?: string
}

export const Todos: React.FC<Props> = ({ className }) => {
	const [filteredTodos, setFilteredTodos] = React.useState<ITodo[]>([])
	const todos = useUnit(todoStore.$todos)
	const filterValue = useUnit(filterStore.$filterValue)

	useEffect(() => {
		setFilteredTodos(setTodosByFilter(todos, filterValue))
	}, [todos, filterValue])
	return (
		<div className={cn(className, style.todos)}>
			{filteredTodos?.map(todo => {
				return <Todo key={todo.id} todo={todo} />
			})}
		</div>
	)
}
