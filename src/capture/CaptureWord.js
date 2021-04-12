import React, { useEffect, useState } from "react";
import { Dropdown, Form, Grid, Input } from "semantic-ui-react";

export const CaptureWord = () => {
    const [books, setBooks] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        setBooks([
            {
                key: 1,
                value: "die-poort",
                text: "Die poort",
            },
            {
                key: 2,
                value: "hanna-hoekom",
                text: "Die ongelooflike avonture van hanna hoekom",
            },
            {
                key: 3,
                value: "die-vrou",
                text: "Die vrou op die skuit",
            },
        ]);

        setLanguages([
            {
                key: 1,
                text: "AFR",
                value: "afr",
            },
            {
                key: 2,
                text: "TUR",
                value: "tur",
            },
            {
                key: 3,
                text: "ENG",
                value: "eng",
            },
        ]);
    });

    return (
        <>
            <h1>Capture Word</h1>

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
                                options={books}
                                selection
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
                            <Dropdown
                                name="source-language"
                                id="source-language"
                                placeholder="Source language"
                                options={languages}
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
                            <Dropdown
                                name="target-language"
                                id="target-language"
                                placeholder="Target language"
                                options={languages}
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
