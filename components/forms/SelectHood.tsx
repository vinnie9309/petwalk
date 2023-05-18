import { useState } from "react";
import MultiSelect from "../multiSelect/MultiSelect";
import { hoods } from "../../public/consts/globals";
import { v4 } from 'uuid';
import './Forms.css';

// TODO: Find a better way to filter clicked items instead of using the selected boolean (make this a state)
const sortedHoods = hoods.sort( ( a, b )  => a.localeCompare( b ) );
const properData: HoodData[] = sortedHoods.map( hood => {
    return {
        label: hood,
        value: hood.replaceAll(' ', '_'),
        id: v4(),
        selected: false
    }
} );

export interface HoodData {
    label: string;
    value: string;
    id: string;
    selected: boolean;
}

const SelectHood = (props: any) => {
    const [ selected, setSelected ] = useState([]);
    const [ selectedHoods, setSelectedHoods ]: any = useState([]);

    // TODO: Fix this type
    const toggleOption = ({ id }: { id: never }) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected];
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id);
                // else, add
            } else {
                newArray.push(id);
                return newArray;
            }
        });
        
        const clicked = selected.includes( id );
        properData.forEach( item => {
            if (item.id === id) item.selected = !clicked;
        } );
    }

    const handleHoodDynamicSearch = (event: any) => {
        const filtered: any = sortedHoods.filter( hood => hood.includes(event.target.value.toUpperCase()) );
        console.log(filtered);
        // filtered.map( (filterItem: any) => {
        //     properData.forEach( dataItem => dataItem.label = filterItem );
        // } );
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // props.nextFormStep();
        setSelectedHoods( properData.filter( item => item.selected === true ) );
        console.log(selectedHoods);

        props.handleData({
            selectedHoods
        });
    }
    
    return (
        <form>
            <h1 className="text-xl mb-2">Изберете всичките квартали в които ще работите</h1>
                <div className="mb-5">
                    <input type="text" placeholder="Търсете квартали" className="w-full border-2 p-2" onChange={handleHoodDynamicSearch} />
                </div>
            
             <div className="hood-form-inner">
                <MultiSelect options={properData} selected={selected} toggleOption={toggleOption} />
             </div>
            <div className="flex w-full">
                <button onClick={handleSubmit} disabled={ selected.join('').length === 0 } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${ selected.join('').length === 0 ? 'disabled' : ''}`}>Завърши регистрация</button>
            </div>
        </form>
    )
}

export default SelectHood;
