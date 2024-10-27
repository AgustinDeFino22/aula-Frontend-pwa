

const MostrarNumerosPares = (numero) => {
    const numeros = [8, 16, 24, 32, 40, 48];

    return (
        <div className="MostrarNumeroPares">
            Os números pares são: <br />
            <ul>
                {numeros.map((numero, index) => (
                    <li key={index}>{numero}</li>
                ))}
            </ul>
        </div>
    )
}
export default MostrarNumerosPares;