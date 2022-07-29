import MLink from "../components/MLink";

const Users = ({users}) => {
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

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}