const Money  = ({productObject}) => {
    
    const {amount, currency} = productObject;

return (
    <div >
        {amount} {currency}
    </div>
)
}

export default Money;