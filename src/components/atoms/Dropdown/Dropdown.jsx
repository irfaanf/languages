import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Option } from './Option';

export const Dropdown = ({ options }) => {
    return (
        <select className="border-2 border-gray-300 w-full col-span-3 p-2 rounded">
            {/* <ChevronDownIcon /> */}
            {options &&
                options.map((option) => {
                    return <Option>{option}</Option>;
                })}
        </select>
    );
};
