import { createEvent, createStore } from 'effector'

const $filterValue = createStore<string>('all')

const handleFilter = createEvent<string>()

$filterValue.on(handleFilter, (_, value) => value)

export const filterStore = {
	$filterValue,
	handleFilter,
}
