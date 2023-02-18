import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import '@/styles/globals.css';
import {Provider} from "react-redux";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination]);

function App({ Component, pageProps }: AppProps) {
  return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
  )
}

export default App;