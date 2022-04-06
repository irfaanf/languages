import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    Dropdown,
    Form,
    Grid,
    Header,
    Input,
} from "semantic-ui-react";
import "./CaptureWord.scss";
import LanguagesDropdown from "./languages-dropdown/LanguagesDropdown";
import { createClient } from '@supabase/supabase-js'

export const CaptureWord = () => {
    const [books, setBooks] = useState([]);
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

    useEffect(() => {
        getBooks();

        // getBooks().then((result) => {
        //     console.log(`RESULT:  ${JSON.stringify(result)}`);
        //     setBooks(result);
        //     console.log(`BOOKS AFTER RESULT:  ${JSON.stringify(books)}`);
        // });

        // this.books = this.books.bind();
    }, []);

       
    const getBooks = async () => {
        let { data } = await supabase
            .from('books')
            .select('*')

        // console.log(`STRINGIFY:  ${JSON.stringify(books)}`);
        // console.log(`RAW:  ${books}`);
        // console.log(`ARRAY:  ${JSON.stringify(Array.from(books))}`);
        // console.log(`[0]:  ${JSON.stringify(books[0])}`);
        // console.log(`[0] CONVERTED:  ${JSON.stringify(convertDataToOption(books[0]))}`);
        // console.log(`[1] CONVERTED:  ${JSON.stringify(convertDataToOption(books[1]))}`);
        // console.log(`[2] CONVERTED:  ${JSON.stringify(convertDataToOption(books[2]))}`);
        // console.log(`TYPEOF:  ${typeof(books)}`);

        setBooks(data);

        return books;
    }

    const convertDataToOption = (book) => {
        console.log("CONVERT======");

        let optionBook = {
            key: book.id,
            value: book.title,
            text: book.title
        }
        console.log(`OPTIONBOOK:  ${JSON.stringify(optionBook)}`);

        return optionBook;
    }

    const convertAll = (books) => {
        let result = [];

        for (let book in books) {
            result.push(convertDataToOption(book));
        }
        return result;
    }

    // const countries = [
    //     { id: 1, title: 'AFG', slug: 'someslug' },
    //     { id: 2, title: 'GBR', slug: 'anotherslug' },
    // ]
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
    ]

    const booksConverted = convertAll(books);
    console.log(`ISARRAY booksConverted:  ${Array.isArray(booksConverted)}`);
    console.log(`ISARRAY countryOptions:  ${Array.isArray(countryOptions)}`);

    console.log(`BOOKS CONVERTED:  ${JSON.stringify(booksConverted)}`)
    console.log(`COUNTRY OPTIONS:  ${JSON.stringify(countryOptions)}`)

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
                                options={booksConverted}
                                // options={(books) => {
                                //     console.log(`INSIDE`)
                                //     if (!books) {
                                //         console.log(`EMPTY`)
                                //     } else {
                                //         console.log(`FULL`)
                                //         for (let b of books) {
                                //             convertDataToOption(b)
                                //         }
                                //     }
                                // }}
                                // options={(Array.from(books)).map((b) => {
                                //     return {
                                //         key: b.id,
                                //         value: b.title,
                                //         text: b.title
                                //     }
                                // })}
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
