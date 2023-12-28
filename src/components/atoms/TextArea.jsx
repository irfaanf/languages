export const TextArea = ({ content }) => {
    return (
        <textarea className="w-full border-2 border-gray-300 rounded p-2">
            {content}
        </textarea>
    );
};
