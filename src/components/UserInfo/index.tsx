import React from 'react'

import { 
  Container,
   Profile, 
   Avatar, 
   UserData, 
   Icons, 
   MicIcon, 
   HeadphoneIcon, 
   SettignsIcon 
  } from './styles';


const UserInfo: React.FC = () => {
   return (
     <Container>
       <Profile>
       <Avatar />
       <UserData>
         <strong>Matheus Souza</strong>
         <span>#2222</span>
       </UserData>
       </Profile>

       <Icons>
         <MicIcon />
         <HeadphoneIcon />
         <SettignsIcon />
       </Icons>
       
     </Container>
   );    
};

export default UserInfo;