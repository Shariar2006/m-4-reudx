import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";

import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask
}

export default function TaskCard({task}: IProps) {
    const dispatch = useAppDispatch()
    return (
        <div className="border px-5 py-3 rounded-md ">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={`size-3 rounded-full
                         ${task.priority === 'High' && 'bg-green-500'}
                         ${task.priority === 'Medium' && 'bg-yellow-500'}
                         ${task.priority === 'Low' && 'bg-red-500'}
                         `}></div>

                    <h1 className={`${task.isCompleted && 'line-through'}`}>{task?.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(deleteTask(task.id))} variant="link" className="p-0 Otext-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox checked={task.isCompleted} onClick={()=> dispatch(toggleCompleteState(task.id))} />
                </div>
            </div>

            <h4>Assigned to: {task.assignTo ? task.assignTo 
                 : 'No one'}</h4>
            <p className="mt-5">{task?.description}</p>
        </div>
    )
}