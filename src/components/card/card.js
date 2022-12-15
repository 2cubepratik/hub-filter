const Card = ({bundesland,id,positionen_website}) => {
    return (
        <div className="card">
            <h1>{bundesland}</h1>
            {id} <br/>
            {positionen_website}
        </div>
    )
}

export default Card;