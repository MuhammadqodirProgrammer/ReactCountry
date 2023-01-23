import "./country.css";
import imgCountry from "./Uzbekistan.png";
console.log(imgCountry);



function Country(promps) {
    console.log(promps,"Prompsssssss");
    return (
      <div className="list">
        <img src={promps.img} alt="country" />
<div className="card-body">
<h2 className="country">{promps.name} </h2>
        <p>Capital: {promps.capital}</p>
        <p>region:{promps.region} </p>
        <button className="btn-more">More...</button>
</div>
      </div>
    );
}

export default Country;
