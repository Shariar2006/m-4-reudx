export interface ITask {
    _id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    assignTo: string | null,
    priority: 'High' | 'Medium' | 'Low'
}

export interface IUser {
    id: string,
    name: string
}