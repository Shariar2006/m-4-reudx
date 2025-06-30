import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ITask } from "@/types";

import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask
}

export default function TaskCard({task}: IProps) {
    console.log(task)
    return (
        <div className="border px-5 py-3 rounded-md ">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={`size-3 rounded-full
                         ${task.priority === 'High' && 'bg-green-500'}
                         ${task.priority === 'Medium' && 'bg-yellow-500'}
                         ${task.priority === 'Low' && 'bg-red-500'}
                         `}></div>

                    <h1>{task?.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant="link" className="p-0 Otext-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox />
                </div>
            </div>

            shtrnadslo@gmnait.com
            <p className="mt-5">{task?.description}</p>
        </div>
    )
}