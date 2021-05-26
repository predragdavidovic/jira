import React from "react";
import { Row, PageName, Git, Container, Item, NavIcon } from "./Styles";

export const GitHub = () => (
    <Row>
        <PageName>Kanban Board</PageName>
        <Git
            as="a"
            href="https://github.com/predragdavidovic/jira"
            target="_blank"
        >
            <Container>
                <Item>
                    <NavIcon />
                    <span>{"Github Repo"}</span>
                </Item>
            </Container>
        </Git>
    </Row>
);
