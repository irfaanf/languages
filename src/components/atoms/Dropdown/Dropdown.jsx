import { ChevronDownIcon } from '@heroicons/react/24/solid';

export const Dropdown = () => {
    return (
        <>
            <select className="border-2 border-gray-300 w-200 col-span-3 p-2 rounded">
                {/* <ChevronDownIcon /> */}
                <option>Die Poort</option>
                <option>The Hunger Games</option>
                <option>Die Poort</option>
            </select>
        </>
    );
};
