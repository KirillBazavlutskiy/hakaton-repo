import type { AppProps } from 'next/app';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

import { Provider } from "react-redux";
import { store } from '@/redux/store';

import "@/styles/globals.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Inter } from '@next/font/google';
import {ToastContainer} from "react-toastify";

const poppins = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  preload: true,
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'],
  fallback: ['system-ui', 'arial'],
});

SwiperCore.use([EffectCoverflow, Pagination]);

function App({ Component, pageProps }: AppProps) {
  return (
        <Provider store={store}>
          <main className={poppins.className}>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
              />
            <Component {...pageProps} />
          </main>
        </Provider>
  )
}

export default App;