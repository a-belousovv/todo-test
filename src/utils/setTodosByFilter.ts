import { ITodo } from '@/types/todo.interface'

export const setTodosByFilter = (todos: ITodo[], filterValue: string) => {
	if (filterValue === 'all') {
		return todos
	} else if (filterValue === 'active') {
		return todos.filter(todo => todo.status === 'active')
	} else if (filterValue === 'completed') {
		return todos.filter(todo => todo.status === 'completed')
	}

	return todos
}
