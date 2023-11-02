const Money  = ({price}) => {
    //console.log(price)
    const {amount, currency} = price;

return (
    <div >
        <p>{amount} {currency}</p>
    </div>
)
}

export default Money;