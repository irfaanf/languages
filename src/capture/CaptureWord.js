import { useEasybase } from "easybase-react";
import React, { useEffect, useState } from "react";
import {
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
    // const [books, setBooks] = useState([]);
    // const [languages, setLanguages] = useState([]);
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({ tableName: "BOOKS", limit: "10" });
        sync();
    }, []);

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
                                options={Frame().map((book) => {
                                    return {
                                        key: book.id,
                                        value: book.slug,
                                        text: book.title,
                                    };
                                })}
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
                </Grid>
            </Form>
        </>
    );
};

export default CaptureWord;
