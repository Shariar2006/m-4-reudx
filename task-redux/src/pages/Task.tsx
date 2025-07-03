import { AddTaskModal } from "@/components/modules/task/AddTaskModal";
import TaskCard from "@/components/modules/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import { filterUpdate, tasksFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";

const Task = () => {

    // const tasksData = useAppSelector(tasksFilter);
    const dispatch = useAppDispatch();
    const {data, isLoading} = useGetTaskQuery()
    console.log(data)

if(isLoading){
    return <>Loading....</>
}

    return (
        <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex justify-between items-center">
                <h4>Tasks</h4>
                <Tabs defaultValue="all" className="">
                    <TabsList>
                        <TabsTrigger onClick={()=>dispatch(filterUpdate('all'))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(filterUpdate('Low'))} value="Low">Low</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(filterUpdate('Medium'))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(filterUpdate('High'))} value="High">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            <div>
                {
                    data?.tasks?.map((task: ITask) => (
                        <TaskCard key={task?._id} task={task} />
                    ))
                }
            </div>
        </div>
    );
};

export default Task;