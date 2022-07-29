import {useState} from "react";
import MLink from "../components/MLink";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'andrey'},
        {id: 2, name: 'julia'}
    ])
    return (
        <div>
            <h1>Список пользователей</h1>

            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <MLink
                            href={`/users/${user.id}`}
                            text={user.name}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;