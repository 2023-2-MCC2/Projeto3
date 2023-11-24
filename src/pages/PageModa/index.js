import styled from "styled-components"
import TextoModa from "../../componentes/TextoModa"
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import TextoCadastro from "../../componentes/TextoCadastro"

const ModaContainer = styled.div`
justify-content: center;
background-color: #EFF2DD;
text-align: center;
`
function PageModa() {
    return(
        <ModaContainer>
            <Header />
            <TextoModa/>
            <TextoCadastro/>
          
            <Footer/>
        </ModaContainer>
    )
}
export default PageModa
