import Hotel from "../../pages/hotel/Hotel";
import "./searchItem.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import photos from "../../photos";

const SearchItem = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/hotels/delhi');
  };

  return (
    <div className="searchItem">
      <img
        src={props.src}
        alt=""
        className="siImg"
      />

      <div className="siDesc">
        <h1 className="siTitle">{props.name}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={navigateHome}>See availability</button>
        </div>
       
      </div>
    </div>
  );
};


export default SearchItem;