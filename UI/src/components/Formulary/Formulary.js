import './Formulary.css';

const Formulary=()=>{
    return(
        <div className="content">
            
            <h1>CAMPO DE AVALIAÇÃO</h1>

            <form className="formulary">
                <label>Nome</label>
                <input type='text'></input>

                <label>Sobrenome</label>
                <input type='text'></input>

                <label>E-mail</label>
                <input type='email'></input>

                <label>Opção:</label>
                <select>
                    <option>Cliente Satisfeito</option>
                    <option>Cliente Insatisfeito</option>
                    <option>Recomendo</option>
                    <option>Não Recomendo</option>
                </select>

                <input type='submit' value='Enviar'></input>
            </form>
        </div>
    )
}
export default Formulary;