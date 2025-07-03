import { AddUserModal } from "@/components/modules/user/AddTaskModal";
import UserCard from "@/components/modules/user/UserCard";
import { users } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
    const userData = useAppSelector(users);

    return (
        <div className="max-w-4xl mx-auto space-y-5">
            <div className="flex justify-between items-center">
                <h4>Users</h4>
                <AddUserModal></AddUserModal>
            </div>
            <div>
            <div>
                {
                    userData.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default User;