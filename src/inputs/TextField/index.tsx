import React from "react";
import TextFieldMui from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  /* justify-content: center; */
`;

const StyledTextField = styled(TextFieldMui)`
  width: 400px;
`;

type Props = {
  label: string;
  errorMsg?: string;
};

function TextField({ errorMsg, label, ...rest }: Props) {
  const onSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={onSubmit}>
      <StyledTextField
        error={errorMsg && errorMsg.length ? true : false}
        label={errorMsg || label}
        variant="filled"
        {...rest}
      />
    </StyledForm>
  );
}

export default TextField;
