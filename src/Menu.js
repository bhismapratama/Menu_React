import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((itemMenu) => {
        const { id, title, img, desc, price } = itemMenu;
        return (
          <article key={id} className='menu_item'>
            <img src={img} alt={title} className='image' />
            <div className="item_info">
              <header>
                <h3>{title}</h3>
                <h4 className='price'>Rp{price},00</h4>
              </header>
              <p className='item_text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
};

export default Menu;
