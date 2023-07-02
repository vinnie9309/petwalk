import UserCard from "../userCard/UserCard";

const UserList = (props: any) => {
    let users = props.data.userData;
    let filtered = [];
    let set = [];
    
    users.map(us => {
        us.selectedHoods.map(hood => {
            if (props.filteredHoods.includes(hood.label)) {
                if(filtered.includes(us)) {
                    return
                } else {
                    filtered.push(us)
                }
            }
        })
    })
    console.log(filtered)
    if (filtered.length > 0) {
        users = filtered;
    } 

    return (
        <>
            {
                users.map((user: any, i: Number): any => {
                    return <UserCard key={user.id} data={user} startChat={props.startChat} />
                })
            }
        </>
    )
}
export default UserList;
