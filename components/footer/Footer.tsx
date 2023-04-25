import logo from '../../public/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex justify-evenly w-full bg-slate-400 bottom-0 left-0 text-white py-8'>
            <div>
                <Image src={logo} height="120" width="160" alt="petsit logo" />
            </div>

            <div className='flex flex-col justify-evenly'>
               <h3 className='text-xl font-semibold'>Услуги</h3> 
               <Link href="/">Намерете гледач</Link>
            </div>

            <div className='flex flex-col justify-evenly'>
                <h3 className='text-xl font-semibold'>За PetSit</h3>
                <Link href="/">За нас</Link>
                <Link href="/">Условия на ползване</Link>
                <Link href="/">Политика за поверителност</Link>
                <Link href="/">Настройки на бисквитки</Link>
            </div>

            <div className='flex flex-col justify-evenly'>
                <h3 className='text-xl font-semibold'>Поддръжка</h3>
                <Link href="/">Свържете се с нас</Link>
                <Link href="/">Помощен център</Link>
            </div>
        </footer>
    )
}

export default Footer;