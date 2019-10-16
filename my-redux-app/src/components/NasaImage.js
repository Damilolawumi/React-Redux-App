import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreator';
import styled from 'styled-components';

const Paragraph = styled.p`
text-align: left;
font-family: cursive;
`;

const DateP = styled.p`
border: 1px solid black;
width: 155px;
height: 35px;
text-align: center;
border-radius: 10px;
padding-top: 10px;
font-family: cursive;
`;

const Image = styled.img`
width: 400px;
margin:auto;
display:block;
`;

const H1 = styled.h1`
text-align:center;
font-family: cursive;

`;

const Div = styled.div`
box-shadow: 0px 1px 4px 0px #aaa;
padding: 10px;
width: 953px;
margin: auto;
margin-top: 15px;
margin-bottom: 10px;
`;

function NasaImage({ fetchApi, title, date, explanation, url }) {
    useEffect(() => {
        fetchApi();
        console.log(title);
    }, [])

    console.log(title);
    return (
        <Div>
            <H1>TODAYS NASA INFORMATION</H1>
            <Paragraph><h3>{title} </h3></Paragraph>
            <DateP> Date--{date}</DateP>
            <Paragraph> Information {explanation}</Paragraph>
            <Image src={url} />
        </Div>
    )
}

export default connect(
    state => state.api,
    actionCreators,
)(NasaImage);