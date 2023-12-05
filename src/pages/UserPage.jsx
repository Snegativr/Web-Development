function UserPage({ user }) {

    if (!user) {
        return <div>User not chosen</div>;
    }

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    );
}

export default UserPage;