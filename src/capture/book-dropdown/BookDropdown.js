import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

export const BookDropdown = (props) => {
    const [bookOptions, setBookOptions] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
        let { data } = await supabase
            .from('books')
            .select('*');

        setBookOptions(convertAll(data));
    };

    const convertAll = (books) => {
        return books.map((book) => {
            let optionBook = {
                key: book.id,
                value: book.title,
                text: book.title
            };

            return optionBook;
        });
    };

    return (
        <Dropdown
            name="book-select"
            placeholder="Click to select book ..."
            options={bookOptions}
            selection
            className="book-select book-title"
        />
    )
}