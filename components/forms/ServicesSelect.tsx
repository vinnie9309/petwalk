import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ServicesSelect = (props: any) => {
    const [ selectedService, setSelectedService ] = useState([]);
    const [ selected, setSelected ] = useState({ walk: false, ownerHome: false, walkerHome: false, dayCare: false });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            selectedService
        });
    }

    const handleCheck = (event: any) => {
        setSelectedService(prevValue => prevValue.concat(event.target.value));
        switch( event.target.value ) {
            case 'walk':
                setSelected( prevVal => ({...prevVal, walk: !prevVal.walk }))
                break;
            case 'ownerHome':
            setSelected( prevVal => ({...prevVal, ownerHome: !prevVal.ownerHome}) )
                break;
            case 'walkerHome':
                setSelected( prevVal => ({...prevVal, walkerHome: !prevVal.walkerHome}) )
                break;
            case 'dayCare':
                setSelected( prevVal => ({...prevVal, dayCare: !prevVal.dayCare}) )
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center mb-8">Услуги от които се заинтересовани</h1>

            <div className="flex mb-5 items-center">
                <span>
                    <FontAwesomeIcon icon={ !selected.walk ? faCircle : faCircleCheck} style={{ fontSize: 30, color: "#EF4444" }}/>
                </span>
                <label htmlFor="walk" className='ml-4 text-lg hover:cursor-pointer'>Разходка на куче</label>
                <input type="checkbox" id="walk" name="walk" value="walk" onChange={handleCheck} className="opacity-0" />
            </div>

            <div className="flex mb-5 items-center">
                <span>
                    <FontAwesomeIcon icon={ !selected.ownerHome ? faCircle : faCircleCheck} style={{ fontSize: 30, color: "#EF4444" }}/>
                </span>
                <label htmlFor="ownerHome" className='ml-4 text-lg hover:cursor-pointer'>Гледане в дома на собственика</label>
                <input type="checkbox" id="ownerHome" name="ownerNome" value="ownerHome" onChange={handleCheck} className="opacity-0" />
            </div>

            <div className="flex mb-5 items-center">
                <span>
                    <FontAwesomeIcon icon={ !selected.walkerHome ? faCircle : faCircleCheck} style={{ fontSize: 30, color: "#EF4444" }}/>
                </span>
                <label htmlFor="walkerHome" className='ml-4 text-lg hover:cursor-pointer'>Гледане в дома на водача</label>
                <input type="checkbox" id="walkerHome" name="walkerHome" value="walkerHome" onChange={handleCheck} className="opacity-0" />
            </div>

            <div className="flex mb-5 items-center">
                <span>
                    <FontAwesomeIcon icon={ !selected.dayCare ? faCircle : faCircleCheck} style={{ fontSize: 30, color: "#EF4444" }}/>
                </span>
                <label htmlFor="dayCare" className='ml-4 text-lg hover:cursor-pointer'>Дневна грижа за любимците</label>
                <input type="checkbox" id="dayCare" name="dayCare" value="dayCare" onChange={handleCheck} className="opacity-0" />
            </div>
            <div className="flex w-full">
                <button className={`bg-red-400 p-4 w-full text-white mt-4 rounded`}>Next</button>
            </div>
        </form>
    )
}

export default ServicesSelect;