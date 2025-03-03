
import ResourcesBurner from "./sections/burner";
import ResourcesGrid from "./sections/resourcesgrid";


const ResourcesPage: React.FC = () => {
    return (
      <div>
        {/* <Starter /> */}
        <ResourcesBurner/>
        <ResourcesGrid/>
  
        {/* Add other sections here */}
      </div>
    );
  };
  
  export default ResourcesPage;