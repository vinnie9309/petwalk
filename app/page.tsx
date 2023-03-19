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

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center mb-5 shadow-md w-full sticky">
        <Header />
      </header>
      <main className="lg:px-36">
        {/* First Section - Banner */}
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="text-5xl text-center mb-7">Резервирайте <span className="text-red-500">доверени гледачи и разхождачи</span> които ще се отнасят към вашия домашен любимец като към семейство</h1>
          <p className="leading-6 opacity-50 mb-7 text-base">Вече повече от 1 000 души използват PetSit.bg за да се грижат за домашните си любимци по време на дните в офиса или при пътувания</p>
          <button className="bg-red-500 text-white p-4 rounded">Намерете гледач</button>
        </div>
        <div className="bg-gray-300 w-full p-8 block absolute left-0"></div>
        {/* Second Section - Services */}
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
        {/* Third Section - Steps to hire */}
        <div>
            <div></div>
            <div>
              <h2 className="text-center text-4xl mb-20">We're here for you at every step of the process</h2>
              <div className="flex justify-center">
                <div>
                  <Image src={CatWoman} height="1024" width="500" alt="woman holding cat" />
                </div>
                <div className="1">Info div
                  <div>
                    <span className="border-black border-2 rounded-r-full">1</span>
                    <h3>Tell us your needs</h3>
                  </div>
                  <p>Help us understand what you're looking for by answering a few simple questions.</p>
                  <div className="2"></div>
                  <div className="3"></div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
