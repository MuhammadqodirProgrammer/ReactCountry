import './form.css'

function Form() {
    return (
        <form className="form"> 
        <input type={"search"} placeholder="Search country" className="input-search"></input>
        <select >
            <option value={"Filter by region"} selected disabled>Filter by region</option>
            <option value={"Americas"}>Americas</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
            <option value={"Africa"}>Africa</option>
            <option value={"Antarctic"}>Antarctic</option>
        </select>
        </form>
    )
}
export default Form;