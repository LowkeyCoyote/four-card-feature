import FourCardFeature from "./components/FourCardFeature/FourCardFeature";
import {Fragment} from "react";


function App() {


    return (
        <div className="App">
            <FourCardFeature
                title={<Fragment>Reliable, efficient delivery <br/> <strong>Powered by Technology</strong></Fragment>}
                subtitles={"Our Artificial Intelligence powered tools use millions of project data points \n" +
                "  to ensure that your project is successful"}
            />
        </div>
    );
}

export default App;
