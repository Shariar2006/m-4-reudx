import { AddUserModal } from "@/components/modules/user/AddTaskModal";

const User = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex justify-between items-center">
                <h4>Users</h4>
                <AddUserModal></AddUserModal>
            </div>
        </div>
    );
};

export default User;