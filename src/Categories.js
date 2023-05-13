import React from 'react';

const Categories = ({categories, filterMenu}) => {
  return (
    <div className="btn">
      {categories.map((category, index) => {
        return(
          <button
            type='button' 
            className='btn_filter'
            key={index} 
            onClick={()=> filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  )
};

export default Categories;
