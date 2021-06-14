import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import routingList from "@variables/routing-list";
import NotFound from "@pages/NotFound";

const App = () => {
    return (  
        <>  
            <Router>
                <Navbar routing={routingList}/>
                <main>
                    <Switch>
                        {
                            routingList.map((route) => {
                                return (
                                    <Route exact={route.isExact} path={route.path} component={route.component} key={route.key}/>
                                )
                            })
                        }
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </main>
            </Router>
        </>
    );
}
 
export default App;