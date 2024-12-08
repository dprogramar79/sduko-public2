'use client'
import React from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar';
import InputSide from './InputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 65%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;
// const HeadingText=`
// color: rgb(4, 4, 34);
//   font-size: 25px;
//   text-align: center;
//   width: 90%;
//    align-items: center;

// `;

const FormPage = () => {
  return (
    <PageWrapper>
      <h1 className='' style={{fontSize:'25px',width:'90vw',margin:'auto',padding:'20px 5px'}}>
      Got a question? We are here to help and any question you have regarding the classified ads on this platform. Please send your message on: support.in@sduko.com

If you have a question regarding the feasibility of the illicit use of your data (such as email or phone number), send an email to: aapl0194@gmail.com
      </h1>

      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;
