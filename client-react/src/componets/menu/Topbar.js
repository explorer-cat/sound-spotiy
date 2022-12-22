import React from 'react';
import styled from 'styled-components';


const _Tobbar = styled.div`
  display:flex;
  width:100%;
  height:70px;
  background-color:green;
`

const NextPrevBtn = styled.div`

`

const UserBtn = styled.div`

`

function Topbar() {
  return (
    <_Tobbar>
      <NextPrevBtn>

      </NextPrevBtn>
      <UserBtn>

      </UserBtn>
    </_Tobbar>
  );
}

export default Topbar;
