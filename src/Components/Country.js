import './country.css'
import  imgCountry from './Uzbekistan.png'
console.log(imgCountry);
function Country() {
    return (
       
        <div className="list">
   <img src={imgCountry} alt="country"  />
            <h2 className="country">UZBEKISTAN</h2>
            <p>Population:34232050</p>
            <p>Capital:Tashkent</p>
            <p>region:Asia</p>
<button className='btn-more'>More...</button>
        </div>
    )
}

export default Country;