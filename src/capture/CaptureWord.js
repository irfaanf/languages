import React, { useEffect, useState } from "react";
import { Dropdown, Form, Grid, Input } from "semantic-ui-react";

export const CaptureWord = () => {
    const [books, setBooks] = useState({});

    useEffect(() => {
      books : {
        {
          id = 1,
          title = ""
        }
      }
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
                                text="Click to select book ..."
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        value="die-poort"
                                        text="Die poort"
                                    />
                                    <Dropdown.Item
                                        value="hanna-hoekom"
                                        text="Die ongelooflike avonture van hanna hoekom"
                                    />
                                    <Dropdown.Item
                                        value="die-vrou"
                                        text="Die vrou op die skuit"
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Field>
                    </Grid.Column>

                    {/* <Grid> */}
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
                    {/* </Grid> */}
                    {/* <div className="four wide column">Page</div>
          <div className="four wide column">
            <input type="number" name="page-no" id="page-no" />
          </div>
          <div className="four wide column">Line</div>
          <div className="four wide column">
            <input type="number" name="line-no" id="page-no" />
          </div> */}

                    <Grid.Column width="4">
                        <Dropdown
                            name="source-language"
                            id="source-language"
                            text="Source language"
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item value="afr" text="AFR" />
                                <Dropdown.Item value="tur" text="TUR" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid.Column>
                    <div className="twelve wide column">
                        <input
                            type="text"
                            name="source-word"
                            id="source-word"
                        />
                    </div>

                    <div className="four wide column">
                        <select name="target-language" id="target-language">
                            <Dropdown.Item value="afr">ENG</Dropdown.Item>
                        </select>
                    </div>
                    <div className="twelve wide column">
                        <input
                            type="text"
                            name="target-word"
                            id="target-word"
                        />
                    </div>

                    <div className="four wide column">Excerpt</div>
                    <div className="twelve wide column">
                        <textarea
                            name="excerpt"
                            id="excerpt"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>

                    <div className="four wide column">Synonyms</div>
                    <div className="twelve wide column">
                        <input type="text" name="synonyms" id="synonyms" />
                    </div>

                    {/* </div> */}
                </Grid>
            </Form>
        </>
    );
};

export default CaptureWord;
