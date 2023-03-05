import Footer from '@/components/footer'
import Header from '@/components/header'
import { store } from '@/redux'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    )
}
