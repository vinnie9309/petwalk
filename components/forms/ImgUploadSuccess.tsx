const ImgUploadSuccess = (props: any) => {

    const handleClick = () => {
        props.nextFormStep();
    }

    return (
        <div>
            <h1 className="text-2xl text-center mb-5">Снимката изглежда супер!</h1>
            <p>Thank you for making a good first impression! This photo will show up in search results, your profile page, and inbox.</p>

            <div className="flex w-full">
                <button onClick={handleClick} className="bg-red-400 p-4 w-full text-white mt-4 rounded">Напред</button>
            </div>
        </div>
    )
}

export default ImgUploadSuccess;