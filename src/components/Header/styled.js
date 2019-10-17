import styled from 'styled-components'

const Container = styled.div`
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #aecded;
    position: relative;
    h1 {
        font-size: 50px;
        color: #ffffff;
        position: absolute;
        z-index: 99;
        right: 55%;
        top: 50%;
        -webkit-transform: translate(0,-100%);
        -ms-transform: translate(0,-100%);
        transform: translate(-50%,-100%);
    }
`
export {Container}
