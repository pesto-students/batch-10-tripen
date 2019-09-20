import React from 'react';
import './TripCard.css';

const TripCard = () => {
  return (
    <li className="trip-card-li">
      <time className="cbp_tmtime" dateTime="2013-04-10 18:30">
        <span>4/10/13</span> <span>18:30</span>
      </time>
      <div className="cbp_tmicon" />
      <div className="cbp_tmlabel">
        <h2>Location</h2>
        <p>
          Winter purslane courgette pumpkin quandong komatsuna fennel green bean
          cucumber watercress. Pea sprouts wattle seed rutabaga okra yarrow
          cress avocado grape radish bush tomato ricebean black-eyed pea maize
          eggplant. Cabbage lentil cucumber chickpea sorrel gram garbanzo
          plantain lotus root bok choy squash cress potato summer purslane
          salsify fennel horseradish dulse. Winter purslane garbanzo artichoke
          broccoli lentil corn okra silver beet celery quandong. Plantain salad
          beetroot bunya nuts black-eyed pea collard greens radish water spinach
          gourd chicory prairie turnip avocado sierra leone bologi.
        </p>
      </div>
    </li>
  );
};
export default TripCard;
