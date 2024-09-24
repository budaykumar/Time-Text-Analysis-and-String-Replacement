import React, { useState, useEffect } from 'react';
import "./App.css"

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  // Function to handle the text change and update stats
  useEffect(() => {
    const wordsArray = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(wordsArray);
    setUniqueWordCount(uniqueWords.size);

    const charArray = text.replace(/[^\w]/g, '');
    setCharCount(charArray.length);
  }, [text]);

  // Function to handle the replacement
  const handleReplaceAll = () => {
    const updatedText = text.split(searchString).join(replaceString);
    setText(updatedText);
  };

  return (
    <div className="container">
      <h2 className="heading">Real-Time Text Analyzer</h2>
      <textarea
        rows="10"
        cols="50"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <div className="stats">
        <p>Unique Word Count: {uniqueWordCount}</p>
        <p>Character Count (Excluding spaces & punctuation): {charCount}</p>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Search for..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          className="inputField"
        />
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          className="inputField"
        />
      </div>
      <button onClick={handleReplaceAll} className="button">
        Replace All
      </button>
    </div>
  );
};

export default TextAnalyzer;

