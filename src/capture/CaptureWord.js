import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    Dropdown,
    Form,
    Grid,
    Header,
    Input
} from "semantic-ui-react";
import "./CaptureWord.scss";
import LanguagesDropdown from "./languages-dropdown/LanguagesDropdown";

export const CaptureWord = () => {
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
        <>
            <Container>
                <Header as="h1">Capture Word</Header>
            </Container>

            <Form>
                <Grid container textAlign="left">
                    <Grid.Column width="4">
                        <Form.Field>
                            <label>Book</label>
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Dropdown
                                name="book-select"
                                placeholder="Click to select book ..."
                                options={bookOptions}
                                selection
                                className="book-select book-title"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field inline>
                            <label>Page</label>
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Input
                                type="number"
                                name="page-no"
                                id="page-no"
                                placeholder="Page number"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field>
                            <LanguagesDropdown
                                name="source-language"
                                id="source-language"
                                placeholder="Source Language"
                                selection
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Form.Input
                                type="text"
                                name="source-word"
                                id="source-word"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field>
                            <LanguagesDropdown
                                name="target-language"
                                id="target-language"
                                placeholder="Target language"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Form.Input
                                type="text"
                                name="source-word"
                                id="source-word"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field inline>
                            <label>Excerpt</label>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width="12">
                        <Form.Field inline>
                            <Form.TextArea
                                name="excerpt"
                                id="excerpt"
                                cols="30"
                                rows="10"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field inline>
                            <label>Synonyms</label>
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width="12">
                        <Form.Field>
                            <Form.Input
                                type="text"
                                name="synonyms"
                                id="synonyms"
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4"></Grid.Column>
                    <Grid.Column width="8">
                        <Button type="submit">Add</Button>
                    </Grid.Column>
                </Grid>
            </Form>
        </>
    );
};

export default CaptureWord;
