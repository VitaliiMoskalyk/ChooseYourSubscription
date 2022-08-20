import LogInForm from 'components/LogInForm/LogInForm';
import { PageWrapper, Title } from './SubscribeModal.styled';

import subscribeValidation from '../../validation/subscribeValidation';

const SubscribeModal = () => {
  return (
    <PageWrapper>
      <Title>Subscription Application</Title>

      <LogInForm btnTitle="Apply" validation={subscribeValidation} />
    </PageWrapper>
  );
};
export default SubscribeModal;
