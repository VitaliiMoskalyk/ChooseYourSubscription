import { Input, InputWrapper, Label } from './InputLabels.styled';

export const InputNameLabel = error => {
  return (
    <InputWrapper>
      <Label htmlFor="name">User name</Label>

      <Input
        error={error}
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
      />
    </InputWrapper>
  );
};
