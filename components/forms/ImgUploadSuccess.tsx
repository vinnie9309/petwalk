const ImgUploadSuccess = (props: any) => {

    const handleClick = () => {
        props.nextFormStep();
    }

    return (
        <div>
            <h1 className="text-2xl text-center mb-5">Снимката изглежда супер!</h1>
            <p>Това е отличен начин да създадете добро първо впечатление. Снимката ви ще се показва в личният ви профил, резултатите от търсенето и във входящата поща.</p>

            <div className="flex w-full">
                <button onClick={handleClick} className="bg-red-400 p-4 w-full text-white mt-4 rounded">Напред</button>
            </div>
        </div>
    )
}

export default ImgUploadSuccess;