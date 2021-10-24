import App from "next/app";
import 'styles/globals.css';

const AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

// AppComponent.getInitialProps = async (appContext) => {
//   const initialProps = await App.getInitialProps(appContext);
//   console.log(initialProps)
//   const res = await fetch('http://localhost:5000/api/users/currentuser', {
//     headers: {
//       'Content-Type': 'application/json',
//       ...appContext.ctx.req.headers
//     }
//   });
//   const user = await res.json();
//   return { 
//     ...initialProps,
//     user,
//    }
// }

export default AppComponent;
