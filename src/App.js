import React, {useEffect, useState} from 'react';
import ThemeContext from './ThemeContext';
import Part2 from './part2';

function App() {

    const [values, changeValues] = useState([]);

    const [show, changeShow] = useState(false);

    useEffect(() => {

    async function fetchMyAPI() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        response = await response.json()
        changeValues(() => response);
    }

    fetchMyAPI()

    changeShow(true);

    }, [])


    const loadSomething = () => {
        async function fetchMyAPI() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
            response = await response.json()
            changeValues(values.concat(response));
        }

        fetchMyAPI()
    }

    return (

        <ThemeContext.Provider value={values}>
            <button onClick={loadSomething}>load something</button>
            {
            show && (
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veniam optio a aliquam. Harum repudiandae maxime voluptates tenetur quas culpa?</p>
            )
            }

            <Part2 />
        </ThemeContext.Provider>
    );
}

export default App;
