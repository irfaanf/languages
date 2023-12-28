export const InputNumber = ({ placeholder, id, name }) => {
    return (
        <input
            className="w-full border-2 border-gray-300 rounded p-2"
            type="number"
            placeholder={placeholder}
            id={id}
            name={name}
            min={1}
            defaultValue={1}
        />
    );
};
