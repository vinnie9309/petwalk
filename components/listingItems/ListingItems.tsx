import Header from "../header/Header";
import Footer from "../footer/Footer";
import './listing-items.css';
import { useSelector } from "react-redux";
import { createUserChat } from "../../app/api/helper/users/userService";
import SelectHood from "../forms/SelectHood";
import UserList from "../userList/UserList";

const ListingItems = (props: any) => {
    const userIdState: string = useSelector( (state:any) => state.dataStore.currentUserId );
    let isSearch = true;

    const addSelectedFilterHoods = (data : any) => {
        // console.log(data)
    }

    const startChat = async (id: any, name: string) => {
        return createUserChat( id, name, userIdState )
    }

 
    return (
        <div className="pt-44 w-full h-full bg-gray-300">
            <Header />
            <div className="flex flex-col list-users-inner lg:flex-row mb-10">
                <div className="flex flex-col shadow-xl bg-gray-100 p-3">
                    {/* <input onChange={handleChange} className="border rounded py-2 pl-3" type="text" placeholder="Търсете по квартал" />
                <button className="hover:bg-gray-300 hover:text-black mt-3 border rounded bg-red-500 text-white py-1 text-lg" type="submit" onClick={handleSearch}>Търсене</button> */}
                    <SelectHood isSearch={isSearch} dispatchFilter={addSelectedFilterHoods}/>
                </div>
                <div className="w-full lg:ml-20 p-7 border-1 border-black">
                    <h1 className="text-center text-xl mb-5">Налични гледачи в избраните квартали</h1>
                    <UserList data={props} startChat={startChat}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListingItems;