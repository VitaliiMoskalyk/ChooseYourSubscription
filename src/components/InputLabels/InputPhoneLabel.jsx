import { Input, InputWrapper, Label } from './InputLabels.styled';

export const InputPhoneLabel = error => {
  return (
    <InputWrapper>
      <Label htmlFor="phone">Phone</Label>

      <Input
        error={error}
        id="phone"
        name="phone"
        type="phone"
        placeholder="Enter your phone"
      />
    </InputWrapper>
  );
};
