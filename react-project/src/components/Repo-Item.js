import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.WrapperRepo>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.WrapperRepo>
  );
};

export default RepositoryItem;