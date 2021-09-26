import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

declare type Props = {
    emphasisText: string
}

export const ContactForm = ({ emphasisText } : Props): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clientId: string = process.env.NEXT_PUBLIC_CONTACT_USER_ID || '';
  const serviceId: string = process.env.NEXT_PUBLIC_CONTACT_SERVICE_ID || '';
  const templateId: string = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID || '';

  emailjs.init(clientId);

  const handleName = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };

  const handleEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const handleMessage = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, {
      name,
      email,
      message,
    }).then(() => {
      setName('');
      setEmail('');
      setMessage('');
    });
  };

  return (
    <Flex height="70vh" bg="black" p="10" borderRadius="10px" flexDirection="column">
      <FormLabel color={emphasisText}>~$ ./.contact</FormLabel>
      <form id="contact" onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel color={emphasisText}>
            ~$ What is your name?
          </FormLabel>
          <Input
            color="white"
            borderRadius="0"
            borderBottom="1px"
            borderColor="white"
            _focus={{ color: { emphasisText } }}
            type="text"
            value={name}
            onChange={handleName}
          />
        </FormControl>
        <FormControl id="email" pt="15px">
          <FormLabel color={emphasisText}>
            ~$ What is your email?
          </FormLabel>
          <Input
            color="white"
            borderRadius="0"
            borderBottom="1px"
            borderColor="white"
            _focus={{ color: { emphasisText } }}
            type="text"
            value={email}
            onChange={handleEmail}
          />
        </FormControl>

        <FormControl id="message" pt="15px">
          <FormLabel color={emphasisText}>
            ~$ What do you want to say?
          </FormLabel>
          <Textarea
            color="white"
            _focus={{ color: { emphasisText } }}
            resize="none"
            rows={6}
            cols={80}
            type="text"
            borderColor="white"
            borderRadius="0px"
            value={message}
            onChange={handleMessage}
          />
        </FormControl>
        <FormControl pt="15px">
          <Input
            type="submit"
            color={emphasisText}
            value="./send"
            justifyContent="left"
          />
        </FormControl>
      </form>
    </Flex>
  );
};
