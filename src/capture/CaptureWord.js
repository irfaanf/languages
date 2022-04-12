import { createClient } from '@supabase/supabase-js';
import React, { useState } from "react";
import {
    Button,
    Container,
    Form,
    Grid,
    Header,
    Input
} from "semantic-ui-react";
import { BookDropdown } from "./book-dropdown/BookDropdown";
import "./CaptureWord.scss";
import LanguagesDropdown from "./languages-dropdown/LanguagesDropdown";

export const CaptureWord = () => {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
    const [bookId, setBookId] = useState();
    const [sourceWord, setSourceWord] = useState();
    const [sourceLanguageId, setSourceLanguageId] = useState();
    const [targetWord, setTargetWord] = useState();
    const [targetLanguageId, setTargetLanguageId] = useState();

    const handleChangeBookId = (value) => {
        alert(value);
        setBookId(value);
    };

    const handleChangeSourceWord = (event) => {
        setSourceWord(event.target.value);
    };

    const handleChangeSourceLanguageId = (event) => {
        setSourceLanguageId(event.target.value);
    };

    const handleChangeTargetLanguage = (event) => {
        setTargetLanguageId(event.target.value);
    };

    const handleChangeTargetWord = (event) => {
        setTargetWord(event.target.value);
    }

    const handleSubmit = () => {
        return captureWord();
    }

    const captureWord = async () => {
        const { data } = await supabase
            .from('words')
            .insert([
                {
                    book_id: bookId,
                    source_word: sourceWord,
                    source_language_id: sourceLanguageId,
                    target_word: targetWord,
                    target_language_id: targetLanguageId
                }
            ]);
    }

    return (
        <>
            <Container>
                <Header as="h1">Capture Word</Header>
            </Container>

            <Form onSubmit={handleSubmit}>
                <Grid container textAlign="left">
                    <Grid.Column width="4">
                        <Form.Field>
                            <label>Book</label>
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <BookDropdown
                                onChange={(value) => handleChangeBookId(value)}
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
                                onChange={handleChangeSourceLanguageId}
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Form.Input
                                type="text"
                                name="source-word"
                                id="source-word"
                                onChange={handleChangeSourceWord}
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="4">
                        <Form.Field>
                            <LanguagesDropdown
                                name="target-language"
                                id="target-language"
                                placeholder="Target language"
                                onChange={handleChangeTargetLanguage}
                            />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width="12">
                        <Form.Field>
                            <Form.Input
                                type="text"
                                name="target-word"
                                id="target-word"
                                onChange={handleChangeTargetWord}
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
