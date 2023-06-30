'use client';

import { useEffect, useState } from "react";
import MultiSelect from "../multiSelect/MultiSelect";
import { hoods } from "../../public/consts/globals";
import { v4 } from 'uuid';
import './Forms.css';
import store from "../../app/redux/store";

// TODO: Find a better way to filter clicked items instead of using the selected boolean (make this a state)
const sortedHoods = hoods.sort((a, b) => a.localeCompare(b));
export interface HoodData {
    label: string;
    value: string;
    id: string;
    selected: boolean;
}

const SelectHood = (props: any) => {
    const [selected, setSelected] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedHoods, setSelectedHoods]: any = useState([]);
    const [hoodObj, setHoodObj]: any[] = useState([]);
    const [filterData, setFilterData]: any[] = useState([]);

    useEffect(() => {
        // TODO: Add data to DB and fetch from there
        const mappedData = sortedHoods.map(hood => {
            return {
                label: hood,
                value: hood.replaceAll(' ', '_'),
                id: v4(),
                selected: false
            }
        });

        setHoodObj(mappedData);
        setFilterData(mappedData);
    }, []);

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
        hoodObj.forEach( (item:any) => {
            if (item.id === id) item.selected = !clicked;
        });
    }

    const handleHoodDynamicSearch = (event: any) => {
        const value: string = event.target.value;
        if (value === '') {
            setHoodObj(filterData)
        } else {
            const filter = filterData.filter((item: any) => item.label.includes(inputValue.toUpperCase()));
            setHoodObj(filter);
        }
        setInputValue(value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const selectedOptions: HoodData[] | any = filterData.filter((option: HoodData) => option.selected === true);
        if (props.isSearch) {
           props.dispatchFilter(selectedOptions)
        } else {
            props.handleData({
                selectedHoods: selectedOptions
            });
            console.log(selectedOptions)
            // props.nextFormStep();
        }

    }

    return (
        <form>
            {!props.isSearch && <h1 className="text-xl mb-2">Изберете всичките квартали в които ще работите</h1>}
            <div className="mb-5">
                <input type="text" placeholder={props.isSearch ? "Търсете по квартали" : "Търсете квартали"} value={inputValue} className="w-full border-2 p-2" onChange={handleHoodDynamicSearch} />
            </div>
            <div className="hood-form-inner">
                <MultiSelect options={hoodObj} selected={selected} toggleOption={toggleOption} />
            </div>
            <div className="flex w-full">
                <button onClick={handleSubmit} disabled={selected.join('').length === 0} className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${selected.join('').length === 0 ? 'disabled' : ''}`}>{props.isSearch ? 'Търсене' : 'Завърши регистрация'}</button>
            </div>
        </form>
    )
}

export default SelectHood;
