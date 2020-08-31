import React from 'react';
import Card from 'components/Card';
import { IoIosPin, IoIosMail, IoIosLink } from 'react-icons/io';

import { AddressContainer, Text } from './styles';

const Address = () => (
  <Card>
    <AddressContainer>
      <div>
        <IoIosPin />
        <Text>Campinas-SP</Text>
      </div>
      <div>
        <IoIosMail />
        <Text isLink>rdomanoel@gmail.com</Text>
      </div>
      <div>
        <IoIosLink />
        <Text isLink>ricardoham@github.io</Text>
      </div>
    </AddressContainer>
  </Card>
);

export default Address;
