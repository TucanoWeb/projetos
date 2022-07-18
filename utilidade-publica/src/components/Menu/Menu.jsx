//Esse componente só define quem vai ser renderizado pelo APP.js


import './menu.css'


const Menu = (props) => {

    const { exportRenderSearchBanks, exportRenderDdd } = props


    function searchBanks() {

        exportRenderSearchBanks(true)
        exportRenderDdd(false)
    }


    function ddd() {

        exportRenderSearchBanks(false)
        exportRenderDdd(true)

    }



    return (
        <div className="wrapperMenu">
            <h1>Selecione uma Opção</h1>
            <button className="buttonBanks" onClick={searchBanks}>Buscar Bancos</button>
            <button className="buttonDDD" onClick={ddd}>Informações Sobre DDD</button>
        </div>

    )

}

export default Menu