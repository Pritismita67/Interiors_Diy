import '../app/globals.css';
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Made from "@/components/Made";
import Problem from "@/components/Problem";
import Ready from "@/components/Ready";
import Simple from "@/components/Simple";
import Templates from "@/components/Templates";
import Transform from "@/components/Transform";
import What from "@/components/What";
import Mars from "./services/Mars";
import Custom from "./services/Custom";
import Varies from "./services/Varies";


export default function Page() {
  return <>
  <Home />
  <What />
  <Problem />
  <Simple />
  <Made />
  {/* <Templates /> */}
  <Mars />
  <Custom />
  <Varies />
  {/* <Analysis /> */}
  <Transform />
  <Footer />
  </>
}