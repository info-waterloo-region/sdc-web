import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 600px) {
    flex-direction: row;
    max-width: 75%;
  }
`;

const ContactItem = styled.div`
  display: inline-block;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
`;

const ContactItemNumber = styled(ContactItem)`
  text-decoration: underline;
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const ContactGroup = styled.div`
  flex: 1;
  @media (min-width: 600px) {
    &:first-child {
      margin-right: 5%;
    }
  }
`;

export default function () {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactRow>
          <ContactItem>Bylaw Cambridge</ContactItem>
          <ContactItemNumber>519-623-1340 x 7907</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Bylaw Kitchener</ContactItem>
          <ContactItemNumber>519-741-2345</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Bylaw Waterloo</ContactItem>
          <ContactItemNumber>519-747-8785</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Police (Emergency)</ContactItem>
          <ContactItemNumber>911</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Police (Non-Emergency)</ContactItem>
          <ContactItemNumber>519-570-9777</ContactItemNumber>
        </ContactRow>
      </ContactGroup>
      <ContactGroup>
        <ContactRow>
          <ContactItem>Community Legal Services</ContactItem>
          <ContactItemNumber>519-743-0254</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Fire Prevention Cambridge</ContactItem>
          <ContactItemNumber>519-621-6001</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Fire Prevention Kitchener</ContactItem>
          <ContactItemNumber>519-741-2495</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Fire Services Waterloo</ContactItem>
          <ContactItemNumber>519-884-2121 x 23306</ContactItemNumber>
        </ContactRow>
        <ContactRow>
          <ContactItem>Waterloo Crime Stoppers</ContactItem>
          <ContactItemNumber>1-800-222-8477</ContactItemNumber>
        </ContactRow>
      </ContactGroup>
    </ContactContainer>
  );
}
