import "./styles/App.scss";
import React from 'react';
import { Hero, Container, Content, Heading, Form, Icon, Columns, Block, Tag } from "react-bulma-components";
import { Nav, NavRoute, SearchTagGroup, SearchTagRowProps } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(fab)
library.add(fas)

const NAVROUTES: NavRoute[] = [
  {
      path: 'https://layout-parser.github.io/tutorials.html',
      label: 'Tutorials',
  },
  {
      path: 'https://layout-parser.readthedocs.io/en/latest/',
      label: 'Docs',
  },
  {
    path: '/',
    label: 'Open Platform',
  },
  {
      path: 'https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w',
      label: 'Discussion',
  },
];

const SearchTagGroupsData: SearchTagRowProps[] = [
  {
      title: "Document Type",
      tags: [
          "Scientific", "Historic", "Forms" 
      ]
  },
  {
      title: "Model Sizes",
      tags: [
          "Small", "Large"
      ]
  },
  {
      title: "Architecture",
      tags: [
          "Detectron2", "Paddle", "EfficientDet"
      ]
  }
]

function App() {
  return (
    <React.Fragment>
      <Nav routes={NAVROUTES} />
      <Hero>
        <Hero.Body color="white">
          <Container>
            <Content pb={3}>
              <Heading size={2}>
                Layout Parser Sharing Platform
              </Heading>
            </Content> 
            <Columns>
              <Columns.Column size={4}>
                <Heading subtitle italic mb={4}  textColor="grey-lighter">
                  Type to search among 100 layout models
                </Heading>
                <Form.Field>
                <Form.Control>
                  <Form.Input
                    color="link"
                    placeholder="PubLayNet"
                    onChange={(e) => {}}/>
                  <Icon align="right" size="small">
                    <FontAwesomeIcon icon={faSearch} size="lg"/>                
                  </Icon>
                </Form.Control>
              </Form.Field>
              <SearchTagGroup tagRows={SearchTagGroupsData}/>
              </Columns.Column>
              <Columns.Column offset={1}>
                <Heading subtitle size={3} mb={1} textTransform="uppercase">
                  Models
                </Heading>
                <div className="is-divider my-3"/>
                <Content>
                  <Block mb={2}>
                    <Block renderAs="a" textSize={5}>
                      PubLayNet Models
                    </Block>
                  </Block>
                  <Block mb={2}>
                    <span className="model-list-cat mr-2">
                      Author
                    </span>
                    <span>
                      Matrix
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      DocType
                    </span>
                    <span>
                      Scientific
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      Last Updated
                    </span>
                    <span>
                      May 29, 2021
                    </span>
                  </Block>
                  <Block>
                    <Tag.Group>
                      <Tag className="model-config">
                        lp://
                      </Tag>
                      <Tag>
                        Detectron2
                      </Tag>
                      <Tag>
                        Small
                      </Tag>
                    </Tag.Group>
                  </Block>
                </Content>
                <div className="is-divider my-3"/>
                <Content>
                  <Block mb={2}>
                    <Block renderAs="a" textSize={5}>
                      HJDataset Models
                    </Block>
                  </Block>
                  <Block >
                    <span className="model-list-cat mr-2">
                      Author
                    </span>
                    <span>
                      Matrix
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      DocType
                    </span>
                    <span>
                      Scientific
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      Last Updated
                    </span>
                    <span>
                      May 29, 2021
                    </span>
                  </Block>
                </Content>
                {/* <div className="is-divider my-3"/> */}

                <Heading subtitle size={3} mb={1} pt={6} mt={6} textTransform="uppercase">
                  Pipelines
                </Heading>
                <div className="is-divider my-3"/>
                <Content>
                  <Block mb={2}>
                    <Block renderAs="a" textSize={5}>
                      Table Detection Pipeline 
                    </Block>
                  </Block>
                  <Block >
                    <span className="model-list-cat mr-2">
                      Author
                    </span>
                    <span>
                      Matrix
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      DocType
                    </span>
                    <span>
                      Scientific
                    </span>
                    <span className="model-list-cat mx-3">
                      -
                    </span>
                    <span className="model-list-cat mr-2">
                      Last Updated
                    </span>
                    <span>
                      May 29, 2021
                    </span>
                  </Block>
                </Content>
                
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </React.Fragment>
  );
}

export default App;
