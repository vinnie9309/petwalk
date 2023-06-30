import UserCard from "../userCard/UserCard";

const UserList = (props: any) => {
    return (
        <>
            {
                props.data.userData.map((user: any, i: Number): any => {
                    return <UserCard key={user.id} data={user} startChat={props.startChat}/>
                })
            }
        </>
    )
}
export default UserList;
