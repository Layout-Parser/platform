import "./styles/App.scss";
import React from "react";
import { union } from "lodash";
import {
  Hero,
  Container,
  Content,
  Heading,
  Columns,
} from "react-bulma-components";
import {
  Nav,
  NavRoute,
  SearchPanel,
  ModelCard,
  ModelCardProps,
  SearchData,
} from "./components";
import { GitHubIssues } from "./api/GitHubAPI";

const NAVROUTES: NavRoute[] = [
  {
    path: "https://layout-parser.github.io/tutorials.html",
    label: "Tutorials",
  },
  {
    path: "https://layout-parser.readthedocs.io/en/latest/",
    label: "Docs",
  },
  {
    path: "/",
    label: "Open Platform",
  },
  {
    path: "https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w",
    label: "Discussion",
  },
];

// const SearchTagGroupsData: SearchTagRowProps[] = [
//   {
//     title: "Document Type",
//     tags: [
//       "Scientific", "Historical", "Forms"
//     ]
//   },
//   {
//     title: "Model Sizes",
//     tags: [
//       "Small", "Large"
//     ]
//   },
//   {
//     title: "Architecture",
//     tags: [
//       "Detectron2", "Paddle", "EfficientDet"
//     ]
//   }
// ];

// const AllModelData: ModelCardProps[] = [
//   {
//     name: "PubLayNet Models",
//     author: "lp-official",
//     docType: "Scientific",
//     updateTime: "Aug 16, 2020",
//     modelSpecs: [
//       {
//         modelConfig: "lp://PubLayNet/faster_rcnn_R_50_FPN_3x",
//         tags: {
//           backend: "detectron2",
//           size: "large",
//         }
//       },
//       {
//         modelConfig: "lp://PubLayNet/lp://PubLayNet/mask_rcnn_R_50_FPN_3x/config",
//         tags: {
//           backend: "detectron2",
//           size: "small",
//         }
//       }
//     ],
//     issueLink: 'https://www.google.com'
//   },
//   {
//     name: "HJDataset Models",
//     author: "lp-official",
//     docType: "Historical",
//     updateTime: "Aug 17, 2020",
//     modelSpecs: [
//       {
//         modelConfig: "lp://HJDataset/mask_rcnn_R_50_FPN_3x/config",
//         tags: {
//           backend: "detectron2",
//           size: "large",
//         }
//       }
//     ],
//     issueLink: 'https://www.baidu.com'
//   },
// ];

// const AllPipelineData: ModelCardProps[] = [
//   {
//     name: "Table Detection Pipeline",
//     author: "shannons",
//     docType: "Business",
//     updateTime: "Aug 16, 2021",
//     issueLink: 'https://www.yahoo.com'
//   },
// ];

function fetchSearchTagDataFromModelData(modelData: ModelCardProps[]) {
  return [
    {
      title: "Document Type",
      tags: union(
        ...modelData.map((singleModelData) => singleModelData.docType)
      ),
    },
    {
      title: "Backends",
      tags: union(
        ...modelData.map((singleModelData) =>
          singleModelData.modelSpecs?.map((spec) => spec.tags.backend)
        )
      ),
    },
    {
      title: "Model Sizes",
      tags: union(
        ...modelData.map((singleModelData) =>
          singleModelData.modelSpecs?.map((spec) => spec.tags.size)
        )
      ),
    },
  ];
}

function App() {
  // init states
  const defualtModelData: ModelCardProps[] = [
    {
      name: "",
      author: "",
      authorLink: "",
      docType: [],
      updateTime: "",
      issueLink: "",
    },
  ];
  const defualtSearchData: SearchData = {
    text: "",
    doctype: [],
    backends: [],
    sizes: [],
  };
  const [modelData, setModelData] = React.useState(defualtModelData);
  const [pipelineData, setPipelineData] = React.useState(defualtModelData);
  const [searchData, setSearchData] = React.useState(defualtSearchData);

  // init values of states
  if (modelData === defualtModelData) {
    GitHubIssues().then(([modelData, pipelineData]) => {
      setModelData(modelData);
      setPipelineData(pipelineData);
    });
  }

  React.useEffect(() => {
    console.log(searchData);
  });

  return (
    <React.Fragment>
      <Nav routes={NAVROUTES} />
      <Hero>
        <Hero.Body color="white">
          <Container>
            <Content pb={3}>
              <Heading size={2}>Layout Parser Sharing Platform</Heading>
            </Content>
            <Columns>
              <Columns.Column size={4}>
                <SearchPanel
                  searchTagRows={fetchSearchTagDataFromModelData(
                    modelData.concat(pipelineData)
                  )}
                  totalModelCount={modelData.length + pipelineData.length}
                  searchData={searchData}
                  setSearchData={setSearchData}
                />
              </Columns.Column>
              <Columns.Column offset={1}>
                <Heading subtitle size={3} mb={1} textTransform="uppercase">
                  Models
                </Heading>

                {modelData.map((singleModelData, i) => (
                  <ModelCard key={i} {...singleModelData} />
                ))}

                <Heading
                  subtitle
                  size={3}
                  mb={1}
                  mt={5}
                  textTransform="uppercase"
                >
                  Pipelines
                </Heading>

                {pipelineData.map((singlePipelineData, i) => (
                  <ModelCard key={i} {...singlePipelineData} />
                ))}
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </React.Fragment>
  );
}

export default App;
