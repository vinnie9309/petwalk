import { useState } from "react";
import MultiSelect from "../multiSelect/MultiSelect";

// TODO: Find a better way to filter clicked items instead of using the selected boolean (make this a state)
const DUMMY_DATA: DummyData[] = [ 
    {
        label: 'Манастирски Ливади',
        value: 'manLivadi',
        id: 2,
        selected: false
    },
    {
        label: 'Хладилника',
        value: 'hladilnika',
        id: 3,
        selected: false 
    },
    {
        label: 'Редута',
        value: 'reduta',
        id: 4,
        selected: false
    },
    {
        label: 'Бояна',
        value: 'boyana',
        id: 5,
        selected: false
    },
    {
        label: 'Борово',
        value: 'borovo',
        id: 6,
        selected: false
    } ];

    export interface DummyData {
        label: string;
        value: string;
        id: number;
        selected: boolean;
    }

const SelectHood = (props: any) => {
    const [ selected, setSelected ] = useState([]);

    // TODO: Fix this type
    const toggleOption = ({ id }: { id: never }) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(id)) {
                return newArray.filter(item => item !== id);
                // else, add
            } else {
                newArray.push(id);
                return newArray;
            }
        });
        
        const clicked = selected.includes( id );
        DUMMY_DATA.forEach( item => {
            if (item.id === id) item.selected = !clicked;
        } );
    }
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.nextFormStep();
        const selectedHoods = DUMMY_DATA.filter( item => item.selected === true );
        const selectedNames = selectedHoods.map( hood => hood.value );

        props.handleData({
            selectedNames
        });
    }
    
    return (
        <form>
            <h1 className="text-lg mb-2">Изберете квартали в които ще работите</h1>
            {/* TODO: Add dynamic search
                <div>
                    <input type="text" placeholder="Търсете квартали" />
                </div>
             */}
            <MultiSelect options={DUMMY_DATA} selected={selected} toggleOption={toggleOption} />
            <div className="flex w-full">
                <button onClick={handleSubmit} disabled={ selected.join('').length === 0 } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${ selected.join('').length === 0 ? 'disabled' : ''}`}>Завърши регистрация</button>
            </div>
        </form>
    )
}

export default SelectHood;
