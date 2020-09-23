import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';



const Part2 = () => {
    const data = useContext(ThemeContext);

    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.userId}</div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Part2;