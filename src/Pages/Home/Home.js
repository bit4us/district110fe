import { Row, Col, Spinner, Container } from 'react-bootstrap';
import Header from '../components/general/Header';
import { Banner } from "../components/FrontPage/Banner";

export default function Home() {

  return (

    <>
      <Header title="Home" />
      <Banner />
    </>
  )
}