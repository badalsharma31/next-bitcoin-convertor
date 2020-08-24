import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Price from "../components/Price";


function Home(props) {
  return (
    <Layout>

      <div >
        <h1>Welcome To Bits Home</h1>
        <p> You can see bitcoin pricies in different currency. </p>
        <Price bpi={props.bpi}></Price>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function() {
  let res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  let data = await res.json();

  console.log('data', data);

  return {
    bpi : data.bpi
  }

}

export default Home;