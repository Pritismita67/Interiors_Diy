import '../globals.css';
import Footer from "@/components/Footer";
import Browse from "./Browse";
import Budget from "./Budget";

import Help from "./Help";
import Kitchen from "./Kitchen";
import Proven from "./Proven";
import Refresh from "./Refresh";
import Yellow from "./Yellow";

export default function Templates() {
  return (
   <>
   <Browse />
   <Yellow />
   <Budget />
   <Refresh />
   <Kitchen />
   
   <Proven />
   <Help />
   <Footer />
   </>
  );
}