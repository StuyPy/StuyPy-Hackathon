import PageHead from '../components/PageHead';
import Menubar from '../components/Menubar';
import Landing from '../components/Landing';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Team from '../components/Team';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <PageHead />

      <Menubar />
      <Landing />
      <div id="main-content" className="fluid-contaienr d-flex flex-column align-items-center">
        <About />
        <Team />
      </div>

      {/* <Footer /> */}
    </div>
  )
}
