import { useIntl } from 'react-intl';

const Index = () => {
  const intl = useIntl();

  return (
    <div>
      <div>{intl.formatMessage({ id: 'header' })}</div>
    </div>
  );
};

export default Index;
