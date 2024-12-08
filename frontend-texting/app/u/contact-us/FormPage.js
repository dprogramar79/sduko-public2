'use client'
//FormPage.js
import React from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar.js';

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact US</TextOne>
        <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;