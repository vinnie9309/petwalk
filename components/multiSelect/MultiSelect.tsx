import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const MultiSelect = ({ options, selected, toggleOption }: any) => {
    return (
        <div className="c-multi-select-dropdown">
        <div className="c-multi-select-dropdown__selected">
        </div>
        <ul className="c-multi-select-dropdown__options">
            { options.map( (option: { id: any, value: any, label: any }) => {
                const isSelected = selected.includes(option.id);

                return (
                    <li className="py-2" onClick={() => toggleOption({ id: option.id })}>
                        <FontAwesomeIcon icon={ isSelected && faCheck } style={{ fontSize: 30, color: "#EF4444" }}/>
                        <input type="checkbox" checked={isSelected} className="invisible" />
                        <span className="cursor-pointer text-lg">{option.label}</span>
                    </li>
                )
            } ) }
        </ul>
    </div>
    )
}

export default MultiSelect;
