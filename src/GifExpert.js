import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpert = () => {

    const [categories, setCategories] = useState([]);

    const handleClick = (e) => {
        const {value} = e.target;
        console.log(value)
        setCategories((prev) => prev.filter((item) => {
            return item !== value 
        }))
    }

    const showCategories = () => {
        return categories.map((item) => {
            return (
                <button 
                    className='item' 
                    key={item}
                    value={item}
                    onClick={handleClick}>{item}<span>X</span></button>
            );
        });
    };

    const showGrid = () => {
        return categories.map((item) => {
            return <GifGrid key={item} category={item}/>;
        });
    }

    return (
        <>
            <h2>GifExpert</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <div className="categories">
                {showCategories()}
            </div>
            <div>
                {showGrid()}
            </div>
        </>
    );
}

export default GifExpert;
