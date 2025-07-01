import { AddTaskModal } from "@/components/modules/task/AddTaskModal";
import TaskCard from "@/components/modules/task/TaskCard";
import { tasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {

    const tasksData = useAppSelector(tasks);
    console.log(tasksData)

    return (
        <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex justify-between items-center">
                <h4>Tasks</h4>
                <AddTaskModal></AddTaskModal>
            </div>
            <div>
            {
                tasksData.map((task)=>(
                    <TaskCard key={task.id} task={task}/>
                ))
            }
            </div>
        </div>
    );
};

export default Task;