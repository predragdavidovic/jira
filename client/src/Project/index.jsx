import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import history from "../browserHistory.js";
import Sidebar from "./sidebar";
import Navigation from "./navigation";
import Board from "./board";
import Modal from "../shared/components/Modal";
import { useDataSet, useModalState } from "../shared/utils/hooks";
import { ProjectPage } from "./Styles.js";
import ProjectDetails from "./Settings";

const Project = () => {
    const { data, setData } = useDataSet();
    const { modal, setModal } = useModalState();
    return (
        <ProjectPage className="sideBar sideBarElement">
            <Sidebar setModal={setModal} modal={modal} />
            <BrowserRouter history={history}>
                <Navigation />
                <Switch>
                    <Route path="/" exact={true}>
                        <Board
                            modal={modal}
                            data={data}
                            setModal={setModal}
                            setData={setData}
                        
                        />
                    </Route>
                        <Route path="/settings">
                        <ProjectDetails />
                    </Route>
                </Switch>
            </BrowserRouter>
            <Modal
                data={data}
                modal={modal}
                setData={setData}
                setModal={setModal}
            />
        </ProjectPage>
    );
};

export default Project;