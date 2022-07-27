import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // console.log("ctx", ctx);
    const originalRenderPage = ctx.renderPage;
    // console.log("originalRenderPage", originalRenderPage);
    // Run the React rendering logic synchronously

    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });
    // console.log("keten", ctx);
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    // console.log(
    //   "initialProps",
    //   initialProps.head.map((i) => {
    //     return i.type;
    //   })
    // );
    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
