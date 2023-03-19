import Header from "../components/header/Header";
import CatWoman from '../public/assets/images/woman-cat.webp';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center p-7 mb-5 shadow-md w-full sticky">
        <Header />
      </header>
      <main className="lg:px-36">
        {/* First Section - Banner */}
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="text-5xl mb-7">Find your <span className="text-red-500">best friends'</span> next best friend</h1>
          <p className="leading-6 opacity-50 mb-7 text-base">Over 1,000,000 people use PetSitter.com to keep their pets happy and well on their days in the office or trips away</p>
          <button className="bg-red-500 text-white p-4 rounded">Find a pet sitter now</button>
        </div>
        <div className="bg-gray-300 w-full p-8 block absolute left-0"></div>
        {/* Second Section - Services */}
        <h1 className="text-center text-4xl my-24">Services for every dog and cat</h1>
        <div className="flex mb-10">
          <div className="left-col">
            <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>Dog Walking</h3>
                <p>Your dog gets a walk around your local area. Perfect for busy days and dogs with extra energy to burn.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>House Sitting</h3>
                <p>Your sitter takes care of your pets and your home. Your pets will get all the attention they need without leaving home.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>Boarding</h3>
                <p>Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.</p>
              </div>
            </div>
          </div>

          <div className="right-col">
          <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>Dog Walking</h3>
                <p>Your dog gets a walk around your local area. Perfect for busy days and dogs with extra energy to burn.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>House Sitting</h3>
                <p>Your sitter takes care of your pets and your home. Your pets will get all the attention they need without leaving home.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 mb-7">
              <i></i>
              <div>
                <h3>Boarding</h3>
                <p>Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.</p>
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
