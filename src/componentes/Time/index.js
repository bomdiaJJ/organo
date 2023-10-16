import Card from '../Card'
import './Time.css'

const Time = (props) => {
    const cssTime = { backgroundColor: props.corPrimaria }
    const cssNome = { borderColor: props.corSecundaria }

    return(
        props.cards.length > 0 ? <section className='time' style={cssTime}>
            <h3 style={cssNome}>{props.nome}</h3>
            <div className='cards'>
                {props.cards.map( card => <Card key={card.nome} corDeFundo={props.corSecundaria} nome={card.nome} cargo={card.cargo} imagem={card.imagem}/>)}
            </div>
        </section>
        : null
    )
}

export default Time