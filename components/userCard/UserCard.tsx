import Image from "next/image";
import defaultUserImg from '../../public/assets/images/icons/dog-walking.webp';
import Link from "next/link";

const UserCard = (props: any) => {
    let user = props.data;
    const hoodLabels = user.selectedHoods.map((hood: any): any => <span className="test inline-block lowercase first-letter:uppercase font-semibold" key={hood.id}>{`${hood.label},`}</span>);
    const servicesLabels = user.selectedServices.map((serviceLabel: any): any => <strong key={user.id + Math.floor(Math.random() * 1000)}>{`${serviceLabel}, `}</strong>);
    
    return (
        <div className="flex lg:flex-row flex-col items-center w-full border bg-gray-100 my-5 shadow-lg p-5 rounded-md" key={user.id}>
            <div className="p-5">
                <Image src={user.userImage === 'default' ? defaultUserImg : user.userImage} alt="user profile image" width="70" height="40" />
            </div>
            <div>
                <h1 className="text-2xl font-medium">{user.name}</h1>
                <div>
                    <span>{user.dailyRate}лв на </span>
                    <span>{user.dailyRateOption === 'day' ? 'ден' : 'час'}</span>
                    <div className="my-3">Избрани квартали:{hoodLabels}</div>
                    <p>Предлагани услуги: {servicesLabels}</p>
                    <p className="my-3">{user.describtion}</p>
                    <button className="bg-red-400 p-2" onClick={() => props.startChat(user.id, user.name)}><Link href={`/userChat/${user.id}`}>Изпрати съобщение</Link></button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;