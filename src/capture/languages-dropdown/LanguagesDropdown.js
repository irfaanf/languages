import { useEasybase } from "easybase-react";
import { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

export const LanguagesDropdown = (props) => {
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({ tableName: "LANGUAGES", limit: "10" });
        sync();
    }, []);

    // console.log(`==============`);
    // console.log(Frame());

    return (
        <Dropdown
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            options={Frame().map((language) => {
                console.log(language.id);
                return {
                    key: language.id,
                    text: language["display-text"],
                    value: language["short-code"],
                    flag: language["flag-code"],
                };
            })}
            selection
        />
    );
};

export default LanguagesDropdown;
