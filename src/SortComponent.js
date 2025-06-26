const SortComponent = ({dispatch}) =>
{

    const handleSort = (e) =>
    {
        console.log(e.target.value)
        const value = e.target.value;
        dispatch({
            type: "SortTickets",
            payload: value,
        })

    }


    return(
        <div>
        <center>
            <select onChange={handleSort}>
                <option value="LowToHigh" >Low to High</option>
                <option value="HighToLow">High to Low</option>
            </select>
        </center>
        </div>
    )
}

export default SortComponent;