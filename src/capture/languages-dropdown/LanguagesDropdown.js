import { useEasybase } from "easybase-react";
import { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { createClient } from "@supabase/supabase-js";

export const LanguagesDropdown = (props) => {
    const supabaseUrl = "https://xqqqxepmfmrliwoarfhw.supabase.co";
    const supabaseKey =
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
            .eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODIzOTM5NywiZXhwIjoxOTMzODE1Mzk3fQ
            .BokX8gTUYM9ZSnrOwfSwcGlbsj1oMWjX1xXZPfdJQ4Y`; //process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({ tableName: "LANGUAGES", limit: "10" });
        sync();
    }, []);

    const getAllLanguages = async () => {
        let { data: languages, error } = await supabase
            .from("languages")
            .select("*");
    };

    // console.log(`==============`);
    // console.log(Frame());

    // console.log(`?????????????`);
    // console.log(data);

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
