import "./events.css"


export function Events() {
    return (
        <div>
            <h1>Events</h1>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>

    )
}
export function Card() {
    return (
        <div className="Card">
            <h1 className="titulo">CARD</h1>
            <p>Descrição do evento 1</p>
            <p>Categoria do evento 1</p>
        </div>
    )
}