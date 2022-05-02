import styled from 'styled-components';
import img from '../../public/img/background.png'

export const MainWrapper = styled.div`
    background-image: url(${props => props.image.src});
    width: 100%;
    height: 100vh;
    display: flex;
    justify-items: center;
    flex-direction: column;
`
export const ContainerHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-top: 100px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 20px 0px 80px;
`
export const ContainerA = styled(Container)`
    flex-direction: column;
`