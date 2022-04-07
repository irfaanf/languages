import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

export const LanguagesDropdown = (props) => {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        getAllLanguages();
    }, []);

    const getAllLanguages = async () => {
        let { data } = await supabase
            .from("languages")
            .select("*");

        setLanguages(convertLanguages(data));
    };

    const convertLanguages = (languageRows) => {
        return languageRows.map((language) => {
            return {
                key: language.id,
                value: language["display-text"],
                text: language["display-text"]
            };
        });
    };

    return (
        <Dropdown
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            options={languages}
            selection
        />
    );
};

export default LanguagesDropdown;
