import "./styles/App.scss";
import React from 'react';
import { Hero, Container, Content, Heading, Columns, Block, Tag } from "react-bulma-components";
import { Nav, NavRoute, SearchTagRowProps, SearchPanel, ModelCard, ModelCardProps } from './components';

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
          "Scientific", "Historical", "Forms" 
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

const ModelCardData: ModelCardProps[] = [
  {
    name: "PubLayNet Models",
    author: "lp-official",
    docType: "Scientific", 
    updateTime: "Aug 16, 2020",
    modelSpecs: [
      {
        modelConfig: "lp://PubLayNet/faster_rcnn_R_50_FPN_3x",
        tags: [
          "detectron2", "large"
        ]
      },
      {
        modelConfig: "lp://PubLayNet/lp://PubLayNet/mask_rcnn_R_50_FPN_3x/config",
        tags: [
          "detectron2", "large"
        ]
      }
    ]
  },
  {
    name: "HJDataset Models",
    author: "lp-official",
    docType: "Historical", 
    updateTime: "Aug 17, 2020",
    modelSpecs: [
      {
        modelConfig: "lp://HJDataset/mask_rcnn_R_50_FPN_3x/config",
        tags: [
          "detectron2", "large"
        ]
      }
    ]
  },
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
                <SearchPanel searchTagRows={SearchTagGroupsData} totalModelCount={100}/>
              </Columns.Column>
              <Columns.Column offset={1}>
                <Heading subtitle size={3} mb={1} textTransform="uppercase">
                  Models
                </Heading>
                
                {
                  ModelCardData.map(
                    (singleModelData) => (
                      <ModelCard {...singleModelData}/> 
                    )
                  )
                }


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
