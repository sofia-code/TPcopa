import styled from 'styled-components'

const Container = styled.div`
    img{
        width:100%;
        height: 300px;
        border-radius: 25px 25px 0 0;
    }
    .info{
        margin-top: -6px;
        padding: 40px;
        background-color: #fff;
        border-radius: 0 0 25px 25px;
        box-shadow: 0px 0px 15px 0px #80808040;
        border: 1px solid #eaeaea;
    }
    h2, h4{
        width: 50%;
        float: left;
        font-size: 21px;
        margin: 5px 0 20px;
    }
    h4{
        text-align: right;
    }
    span{
        font-weight: 600;
        display: block;
        padding-bottom: 10px;
    }
    .ultFinalPuntos p{
        width: 50%;
        float: left;
    }
    
`
export {Container}
