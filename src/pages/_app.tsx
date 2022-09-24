import '../styles/global.css';

import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import store from '@/store';
import { lang, messages } from '@/utils/i18n';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    {/* @ts-expect-error */}
    <IntlProvider locale={lang} messages={messages[lang]}>
      <Component {...pageProps} />
    </IntlProvider>
  </Provider>
);

export default MyApp;
