import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreator';
import styled from 'styled-components';

const Paragraph = styled.p`
text-align: left;
font-family: cursive;
`;

const Image = styled.img`
width: 400px;
margin:auto;
display:block;
`;

const H1 = styled.h1`
text-align:center;

`;

function NasaImage({ fetchApi, title, date, explanation, url }) {
    useEffect(() => {
        fetchApi();
        console.log(title);
    }, [])

    console.log(title);
    return (
        <div>
            <H1>NASA INFORMATION</H1>
            <Paragraph>{title} </Paragraph>
            <Paragraph> {date}</Paragraph>
            <Paragraph> {explanation}</Paragraph>
            <Image src={url} />
        </div>
    )
}

export default connect(
    state => state.api,
    actionCreators,
)(NasaImage);