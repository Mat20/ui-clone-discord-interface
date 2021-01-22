import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon  } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
   const div = messagesRef.current;

   if (div) {
     div.scrollTop = div.scrollHeight;
   }
  }, [messagesRef]);

   return (
     <Container>
       <Messages ref={messagesRef} >
       {Array.from(Array(6).keys()).map((n) => (
        <ChannelMessage
        key={n}
        author="Matheus Souza"
        date="03/08/1996"
        content="Dia Internacional da Mulher"
        />
      ))}
        <ChannelMessage
        author="Alice Custodio"
        date="28/09/2020"
        content={
        <>
        <Mention>@Matheus Souza</Mention>Quero casar com ela, me ajuda Deus
        </>
        }
        hasMention
        isBot
        />
       </Messages>

       <InputWrapper>
         <Input type="text" placeholder="Conversarem #chat-livre" />
         <InputIcon />
       </InputWrapper>
     </Container>
   );    
};

export default ChannelData;