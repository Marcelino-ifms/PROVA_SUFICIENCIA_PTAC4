import { getUser } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    const users = await getUser();
    return (
        <div>
            <h1>Dashboard</h1>
            {users?.map((user) => <p key={user.id}>{user.name}</p> )}
        </div>
    );
};