// todoStore.ts
import { ITodo, Status } from '@/types/todo.interface'
import { createEvent, createStore } from 'effector'

const $todos = createStore<ITodo[]>([])

const addTodo = createEvent<ITodo>()
const changeTodoStatus = createEvent<{
	id: number
	status: Status
}>()

const clearCompleted = createEvent()

$todos.on(addTodo, (state, todo) => {
	return [...state, todo]
})

$todos.on(changeTodoStatus, (state, payload) => {
	return state.map(todo => {
		if (todo.id === payload.id) {
			return {
				...todo,
				status: payload.status,
			}
		}
		return todo
	})
})

$todos.on(clearCompleted, (state, _) => {
	return state.filter(todo => todo.status != Status.COMPLETED)
})

export const todoStore = {
	$todos,
	addTodo,
	changeTodoStatus,
	clearCompleted,
}
