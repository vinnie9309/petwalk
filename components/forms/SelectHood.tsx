import { useState } from "react";
import MultiSelect from "../multiSelect/MultiSelect";

const DUMMY_DATA: Array<{ label: string, value: string, id: number }> = [ 
    {
        label: 'Манастирски Ливади',
        value: 'manLivadi',
        id: 2
    },
    {
        label: 'Хладилника',
        value: 'hladilnika',
        id: 3 
    },
    {
        label: 'Редута',
        value: 'reduta',
        id: 4 
    },
    {
        label: 'Бояна',
        value: 'boyana',
        id: 5
    },
    {
        label: 'Борово',
        value: 'borovo',
        id: 6 
    } ];

const SelectHood = (props: any) => {
    const [ selectedHood, setSelectedHood ] = useState([]);
    const [ selected, setSelected ] = useState([]);

    // TODO: Fix this type
    const toggleOption = ({ id }: { id: never }) => {
        setSelected(prevSelected => {
            const getItem: any = DUMMY_DATA.find( item => item.id === id);
            console.log(getItem);
            console.log(selected);
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(id)) {
                return newArray.filter(item => item != id)
                // else, add
            } else {
                newArray.push(id);
                return newArray;
            }
        })
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();

        
        props.handleData({
            selectedHood
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-lg mb-2">Изберете квартали в които ще работите</h1>
            {/* TODO: Add dynamic search
                <div>
                    <input type="text" placeholder="Търсете квартали" />
                </div>
             */}
            <MultiSelect options={DUMMY_DATA} selected={selected} toggleOption={toggleOption} />
            <div className="flex w-full">
                <button disabled={ selected.join('').length === 0 } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${ selected.join('').length === 0 ? 'disabled' : ''}`}>Завърши регистрация</button>
            </div>
        </form>
    )
}

export default SelectHood;
