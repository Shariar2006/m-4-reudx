import TaskCard from "@/components/modules/task/TaskCard";
import { tasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {

    const tasksData = useAppSelector(tasks);
    console.log(tasksData)

    return (
        <div className="max-w-4xl mx-auto">
            {
                tasksData.map((task)=>(
                    <TaskCard key={task.id} task={task}/>
                ))
            }
        </div>
    );
};

export default Task;