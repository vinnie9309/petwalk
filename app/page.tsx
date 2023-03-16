import FormContiner from "../components/form-container/FormContainer";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center p-7 mb-5 shadow-md w-full sticky">
        <Header />
      </header>
      <main className="px-36">
        {/* <FormContiner /> */}
        <div className="flex flex-col justify-center items-center py-20">
          <h1 className="text-5xl mb-7">Find your <span>best friends'</span> next best friend</h1>
          <p className="leading-6 opacity-50 mb-7 text-base">Over 1,000,000 people use PetSitter.com to keep their pets happy and well on their days in the office or trips away</p>
          <button className="bg-red-500 text-white p-4 rounded">Find a pet sitter now</button>
        </div>
      </main>
    </>
  )
}
