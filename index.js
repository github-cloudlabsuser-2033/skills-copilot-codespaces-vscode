import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
    [
       { name: 'John', age: 25 },
       { name: 'Jane', age: 30 }
    ],
    [
       { name: 'Bob', age: 40 }
    ]
    ];
    const names = data.flat().map(person => person.name);
    console.log(names);


    const ages = data.flat().map(person => person.age);
    console.log(ages);



    const MarkdownEditor = () => {
        const [markdown, setMarkdown] = useState('type markdown here');

        const handleChange = (e) => {
            setMarkdown(e.target.value);
        };

        return (
            <div>
                <textarea
                    value={markdown}
                    onChange={handleChange}
                    rows="10"
                    cols="50"
                />
                <div>
                    <h2>Preview</h2>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>
        );
    };

    export default MarkdownEditor;


    const reverseSentence = (sentence) => {
        const reversed = sentence.split(' ').reverse().join(' ');
        return reversed.charAt(0).toUpperCase() + reversed.slice(1);
    };

    const inputSentence = "hello world from copilot";
    const reversedSentence = reverseSentence(inputSentence);
    console.log(reversedSentence);
    