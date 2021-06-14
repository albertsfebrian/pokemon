import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import routingList from "@variables/routing-list";
import NotFound from "@pages/NotFound";
import { Suspense } from "react";
import Loading from "@components/Loading";

const App = () => {
    return (  
        <>  
            <Router>
                <Navbar routing={routingList}/>
                <main>
                    <Suspense fallback={<Loading/>}>
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
                    </Suspense>
                </main>
            </Router>
        </>
    );
}
 
export default App;