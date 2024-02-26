import {BrowserRouter ,Switch,Route,Redirect} from "react-router-dom"
import { getUser } from "./services/authorize";
import Home from "./home"
import FormComponent from "./FormComponent" 
import ContentComponent from "./Contect"
import CreatorComponent from "./Creator"
import FORM from './blogs'
import SingleComponent from "./SingleComponent"
import EditComponent from "./EditComponent"
import LoginCOmponent from "./LoginCOmponent"
import RegisterComponent from "./RegisterComponent"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/content"><ContentComponent/></Route>
                <Route exact path="/creator"><CreatorComponent/></Route>
                <Route exact path="/blogs"><FORM/></Route>
                <Route
                    path="/create"
                    render={() =>
                    getUser() ? (
                        <FormComponent />
                    ) : (
                         <Redirect to="/login" />
                        )
                     }
                />
                <Route exact path="/blog/:slug"><SingleComponent/></Route>
                <Route
                    path="/blog/edit/:slug"
                    render={() =>
                    getUser() ? (
                        <EditComponent />
                    ) : (
                         <Redirect to="/login" />
                        )
                     }
                />
                <Route exact path="/login"><LoginCOmponent/></Route>
                <Route exact path="/register"><RegisterComponent/></Route>
                <div class="position-absolute top-50 start-50 translate-middle">
                    <h1 className="Page_ERROR">ไม่มีหน้าที่ท่านกำหนด</h1>
                    <center><img src="data:image/png;base64,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"/></center>
                    <a href="/">กลับไปหน้าแรก</a>
                </div>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;