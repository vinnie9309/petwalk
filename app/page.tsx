import Header from "../components/header/Header";
import CatWoman from '../public/assets/images/woman-cat.webp';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faHouseChimneyUser,
  faPaw,
  faShieldDog,
  faHouseCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import './styles.css';
import Footer from "../components/footer/Footer";
import ladyDog from '../public/assets/images/lady-laptop-dog.webp';
import dollar from '../public/assets/images/icons/dollar-tag.svg';
import pin from '../public/assets/images/icons/geo-locator.svg';
import list from '../public/assets/images/icons/list.svg';

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center mb-5 shadow-md w-full fixed  bg-white z-50">
        <Header />
      </header>
      <main className="lg:px-36 lg:mt-24">
        {/* 1 First Section - Banner */}
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="text-5xl text-center mb-7">Резервирайте <span className="text-red-500">доверени гледачи и разхождачи</span> които ще се отнасят към вашия домашен любимец като към семейство</h1>
          <p className="leading-6 text-slate-400 mb-7 text-base">Вече повече от 1 000 души използват PetSit.bg за да се грижат за домашните си любимци по време на дните в офиса или при пътувания</p>
          <button className="bg-red-500 text-white p-4 rounded">Намерете гледач</button>
        </div>
        <div className="bg-gray-300 w-full p-8 block absolute left-0"></div>
        {/* 2 Second Section - Services */}
        <h1 className="text-center text-4xl mt-24 mb-12">Услуги за всяко куче</h1>
        <p>.</p>
        <div className="flex mb-10 justify-evenly">
          <div className="left-col">
            <div className="flex items-center col-xs-12 col-sm-6 mb-7 max-w-xl">
              <i className="fa-solid fa-house-chimney"></i>
              <FontAwesomeIcon icon={faHouseChimney} style={{ fontSize: 30, color: "#EF4444" }}/>
              <div className="ml-4">
                <h3 className="text-2xl">Гледане във вашия дом</h3>
                <p>Вашият гледач ще се грижи за домашните ви любимци и за дома ви. Вашите домашни любимци ще получат цялото внимание от което се нуждаят, без да напускат дома си</p>
              </div>
            </div>

            <div className="flex items-center col-xs-12 col-sm-6 mb-7 max-w-xl">
            <FontAwesomeIcon icon={faHouseChimneyUser} style={{ fontSize: 30, color: "#EF4444" }}/>
              <div className="ml-4">
                <h3 className="text-2xl">В дома на гледача</h3>
                <p>Вашите домашни любимци остават в дома на гледача. Там те ще бъдат третирани като част от семейството в комфортна среда.</p>
              </div>
            </div>

            <div className="flex items-center col-xs-12 col-sm-6 mb-7 max-w-xl">
            <FontAwesomeIcon icon={faPaw} style={{ fontSize: 30, color: "#EF4444" }}/>
              <div className="ml-4">
                <h3 className="text-2xl">Разходка на кучета</h3>
                <p>Запазете посещение, за да осигурите на домашния си любимец ежедневна доза нужни упражнения.</p>
              </div>
            </div>
          </div>

          <div className="right-col">
          <div className="flex items-center col-xs-12 col-sm-6 mb-7 max-w-xl">
            <FontAwesomeIcon icon={faShieldDog} style={{ fontSize: 30, color: "#EF4444" }}/>
              <div className="ml-4">
                <h3 className="text-2xl">Дневна грижа за домашни любимци</h3>
                <p>Домашният ви любимец прекарва деня в дома на гледача. Оставяте го сутрин и взимате щастливо животинче вечерта.</p>
              </div>
            </div>

            <div className="flex items-center col-xs-12 col-sm-6 mb-7 max-w-xl">
              <FontAwesomeIcon icon={faHouseCircleCheck} style={{ fontSize: 30, color: "#EF4444" }}/>
              <div className="ml-4">
                <h3 className="text-2xl">Посещения на място</h3>
                <p>Вашият гледач идва в дома ви, за да си играе с домашните ви любимци, да им сипе храна или да им почисти тоалетната.</p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 Third Section - Steps to hire */}
        <div>
            <div className="bg-red-500 h-1 w-16 m-auto mb-8 rounded"></div>
            <div>
              <h2 className="text-center text-4xl mb-20">Стъпки за наемане на гледач на домашни любимци</h2>
              <div className="flex justify-center">
                <div>
                  <Image src={CatWoman} height="1024" width="500" alt="woman holding cat" />
                </div>
                <div className="flex flex-col justify-evenly ml-16">
                  {/* Section 1 */}
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="circle-border mr-3">1</span>
                      <h3 className="text-2xl font-semibold">Кажете ни от какво се нуждаете</h3>
                    </div>
                    <p className="text-slate-400">Помогнете ни да разберем какво търсите, като отговорите на няколко прости въпроса.</p>
                  </div>
                  {/* Section 2 */}
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="circle-border mr-3">2</span>
                      <h3 className="text-2xl font-semibold">Разгледайте най-добрите си съвпадения</h3>
                    </div>
                    <p className="text-slate-400 max-w-2xl">Сравнете гледачите на домашни любимци близо до вас по отношение на тяхната гъвкавост, цени и опит. След това поговорете с тези, които са ви харесали.</p>
                  </div>
                  {/* Section 3 */}
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="circle-border mr-3">3</span>
                      <h3 className="text-2xl font-semibold">Наемете най-добрият гледач</h3>
                    </div>
                    <p className="text-slate-400">Насрочете час с избрания от вас гледач на домашни любимци и можете да започнете. Толкова е просто!</p>
                  </div>
                  {/* Section 4 */}
                  <div>
                    <button className="bg-red-500 text-white p-4 rounded mt-5">Намерете гледач</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* 4 Line Break Banner */}
        <div className="bg-gray-300 w-full p-8 mt-12 block absolute left-0 text-white">
          <h1 className="text-3xl text-center pt-2 mb-7">Резервирайте <span className="text-red-500">доверени гледачи и разхождачи</span> които ще се отнасят към вашия домашен любимец като към семейство</h1>
        </div>
        {/* 5 Line Break Banner */}
        <div className="mt-72">
          <div>
            <h1 className="text-center text-4xl mb-20">Нашите предимства</h1>
            <div className="flex">
              <div className="flex flex-1 flex-col justify-evenly">
                <div className="flex">
                  <Image src={pin} height="60" width="20" alt="geolocation pin icon" />
                  <div>
                    <h3>Надеждни гледачи близо до вас</h3>
                    <p>Вашият домашен любимец е част от семейството ви и това е начинът, по който се отнасяме към него. В нашата платформа ще намерите само надеждни гледачи на домашни любимци, намиращи се близо до вас.</p>
                  </div>
                </div>
                <div className="flex">
                  <Image src={pin} height="60" width="20" alt="geolocation pin icon" />
                  <div>
                    <h3>Лесно намиране на подходящ гледач</h3>
                    <p>С помощта на различни опции за филтриране и нашата уникална платформа за търсене, ви показваме най-подходящите гледачи на домашни любимци. Независимо дали става дума за космат, пернат или люспест приятел, ние имаме подходящата опция за вас!</p>
                  </div>
                </div>
                <div className="flex">
                  <Image src={pin} height="60" width="20" alt="geolocation pin icon" />
                  <div>
                    <h3>Гледач за всеки повод</h3>
                    <p>От бърза разходка в парка до едномесечна ваканция - през цялата година можете да намерите подходящ гледач за всеки повод.</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image src={ladyDog} height="1200" width="500" alt="lady on laptop with a dog next to her" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
