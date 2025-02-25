export interface ITodo {
	id: number
	text: string
	status: Status
}

export enum Status {
	ACTIVE = 'active',
	COMPLETED = 'completed',
}
