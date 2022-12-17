import React from "react";
import { AuthFormTitle } from "../Components/Styles/AuthFormTitle.styled";
import { AuthFormContainer } from "../Components/Styles/AuthFormContainer.styled";
import { TableContainer } from "../Components/Styles/TableContainer.styled";
import UsersTable from "../Components/UsersTable";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  padding-bottom: 10px;
`;

function Home() {
  return (
    <>
      <Navbar />
      <AuthFormContainer>
        <TableContainer>

          <Div></Div>
          <UsersTable />
        </TableContainer>
      </AuthFormContainer>
    </>
  );
}

export default Home;
