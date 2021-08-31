import "./styles/App.scss";
import React from "react";
import { intersection, lowerCase, union } from "lodash";
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

function applySearchConditions(
  modelData: ModelCardProps[],
  searchData: SearchData
): ModelCardProps[] {
  let targetModelData = modelData;

  targetModelData = targetModelData.filter((model) =>
    model.name.toLowerCase().includes(searchData.text.toLowerCase())
  );

  if (searchData.doctype.length) {
    targetModelData = targetModelData.filter((model) => {
      return intersection(model.docType, searchData.doctype).length;
    });
  }

  if (searchData.backends.length) {
    targetModelData = targetModelData.filter((model) => {
      return intersection(
        model.modelSpecs
          ? model.modelSpecs.map((modelSpec) => modelSpec.tags.backend)
          : [],
        searchData.backends
      ).length;
    });
  }

  if (searchData.sizes.length) {
    targetModelData = targetModelData.filter((model) => {
      return intersection(
        model.modelSpecs
          ? model.modelSpecs.map((modelSpec) => modelSpec.tags.size)
          : [],
        searchData.sizes
      ).length;
    });
  }

  return targetModelData;
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

  React.useEffect(() => { });

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
                  totalModelCount={
                    applySearchConditions(modelData, searchData).length +
                    applySearchConditions(pipelineData, searchData).length
                  }
                  searchData={searchData}
                  setSearchData={setSearchData}
                />
              </Columns.Column>
              <Columns.Column offset={1}>
                <Heading subtitle size={3} mb={1} textTransform="uppercase">
                  Models
                </Heading>

                {applySearchConditions(modelData, searchData).map(
                  (singleModelData, i) => (
                    <ModelCard key={i} {...singleModelData} />
                  )
                )}

                <Heading
                  subtitle
                  size={3}
                  mb={1}
                  mt={5}
                  textTransform="uppercase"
                >
                  Pipelines
                </Heading>

                {applySearchConditions(pipelineData, searchData).map(
                  (singlePipelineData, i) => (
                    <ModelCard key={i} {...singlePipelineData} />
                  )
                )}
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </React.Fragment>
  );
}

export default App;
