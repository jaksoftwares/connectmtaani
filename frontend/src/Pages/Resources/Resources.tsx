import Navbar from "../../Components/Common/Navbar/Navbar";
import Footer from "../../Components/Common/Footer/Footer";
import ResourcesBurner from "./sections/burner";
import ResourcesGrid from "./sections/resourcesgrid";


const ResourcesPage: React.FC = () => {
    return (
      <div>
        {/* <Starter /> */}
        <Navbar/>
        <ResourcesBurner/>
        <ResourcesGrid/>
        <Footer/>
  
        {/* Add other sections here */}
      </div>
    );
  };
  
  export default ResourcesPage;