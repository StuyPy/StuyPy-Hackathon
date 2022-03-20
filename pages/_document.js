import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
        return (
        <Html lang="en">
            <Head />
            <body dataBsSpy="scroll" dataBsTarget="#navbar" dataBsOffset="0" tabIndex="0">
                <Main />
                <NextScript />
            </body>
        </Html>
        );

    }
}