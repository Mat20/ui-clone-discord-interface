import styled from 'styled-components';

/*
  SL - Sever List
  SN - Sever Name
  CI - Channel Info
  CL - Channel List
  CD - Channel Data
  UL - User List
  UI - User Ifo
*/

export const Grid = styled.div`
   display: grid;

   grid-template-columns: 71px 204px auto 240px;
   grid-template-rows: 46px auto 52px;

   grid-template-areas:
   'SL SN CI CI'
   'SL CL CD UL'
   'SL UI CD UL';

   height: 100vh;
`;