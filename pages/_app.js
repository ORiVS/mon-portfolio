import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Sessime Orias</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
