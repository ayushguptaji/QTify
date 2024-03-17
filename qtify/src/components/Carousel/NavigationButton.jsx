import React from 'react';

const NavigationButton = ({ link, name }) => {
  return (
    <div className={name}>
        <img src={link} alt={name} />
    </div>
  )
}

export default NavigationButton;