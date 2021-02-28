import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Brr, it\'s chilly!',
    iconName: 'snowflake'
  }
};

const getSeason = (ltt, month) => {
  if (month > 2 && month < 9) {
    return ltt > 0 ? 'summer' : 'winter';
  } else {
    return ltt > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.ltt, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive right`} />
    </div>
  )
};

export default SeasonDisplay;
