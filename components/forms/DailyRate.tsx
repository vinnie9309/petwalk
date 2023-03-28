import { useState } from "react";

const DailyRate = (props: any) => {
    const [ rateVal, setRateVal ] = useState('');
    const [ rateOption, setRateOption ] = useState('');
    const [ nextDisabled, setNextDisabled ] = useState(true);

    const handleRate = (event: any) => {
        setNextDisabled(event.target.value.length === 0)
        setRateVal(event.target.value);
    }

    const handleSelect = (event: any) => {
        setRateOption(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            rateVal,
            rateOption
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center mb-5">What rate are you offering for this job?</h1>
            <p className="mb-2 text-lg">Rate</p>
            <div className="flex mb-5">
                <div className="flex flex-col mr-5">
                    <div className="flex items-center border border-black rounded pl-3">
                        <span>лв</span>
                        <input onChange={handleRate} className="py-2 pl-3 outline-none border-none" id="email" />
                    </div>
                </div>

                <div className="w-full flex border border-black">
                    <select name="ratePeriod" id="ratePeriod" className="w-full bg-inherit pl-3" onChange={handleSelect}>
                        <option value="day">/ден</option>
                        <option value="hour">/час</option>
                    </select>
                </div>
            </div>
            <p className="mb-5 text-slate-500">It’s ok if aren’t sure about the rate, add an approximate one. You can always change it later.</p>
            <div className="flex w-full">
                <button disabled={ nextDisabled } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${nextDisabled ? 'disabled' : ''}`}>Next</button>
            </div>
        </form>
    )
}

export default DailyRate;
