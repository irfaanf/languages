import React from 'react';

export const CaptureWord = () => {

    return (
        <>
            <h1>Capture Word</h1>

            <div className="ui left aligned grid container">
                <div className="four wide column">
                    Book
                </div>
                <div className="twelve wide column">
                    <select name="book-select" id="book-select">
                        <option value="die-poort">Die poort</option>
                        <option value="hanna-hoekom">Die ongelooflike avonture van hanna hoekom</option>
                        <option value="die-vrou">Die vrou op die skuit</option>
                    </select>
                </div>

                <div className="four wide column">Page</div>
                <div className="four wide column"><input type="number" name="page-no" id="page-no"/></div>
                <div className="four wide column">Line</div>
                <div className="four wide column"><input type="number" name="line-no" id="page-no"/></div>

                <div className="four wide column">
                    <select name="source-language" id="source-language">
                    <option value="afr">AFR</option>
                    <option value="tur">TUR</option>
                    </select>
                </div>
                <div className="twelve wide column">
                    <input type="text" name="source-word" id="source-word"/>
                </div>

                <div className="four wide column">
                    <select name="target-language" id="target-language">
                    <option value="afr">ENG</option>
                    </select>
                </div>
                <div className="twelve wide column">
                    <input type="text" name="target-word" id="target-word"/>
                </div>

                <div className="four wide column">
                    Excerpt
                </div>
                <div className="twelve wide column">
                    <textarea name="excerpt" id="excerpt" cols="30" rows="10"></textarea>
                </div>

                <div className="four wide column">
                    Synonyms
                </div>
                <div className="twelve wide column">
                    <input type="text" name="synonyms" id="synonyms"/>
                </div>
            </div>
        </>
    );
}

export default CaptureWord;