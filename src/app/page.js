import Analysis from "@/components/Analysis";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Made from "@/components/Made";
import Problem from "@/components/Problem";
import Ready from "@/components/Ready";
import Simple from "@/components/Simple";
import Templates from "@/components/Templates";
import Transform from "@/components/Transform";
import What from "@/components/What";


export default function Page() {
  return <>
  <Home />;
  <What />
  <Problem />
  <Simple />
  <Made />
  {/* <Templates /> */}
  <Ready />
  <Analysis />
  <Transform />
  <Footer />
  </>
}