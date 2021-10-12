import "./styles/App.scss";
import React from "react";
import { intersection, union } from "lodash";
import {
  Hero,
  Container,
  Content,
  Heading,
  Columns,
  Button,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CREATE_ISSUE_URL =
  "https://github.com/Layout-Parser/platform/issues/new?assignees=lolipopshock&labels=model%2Fupload&template=new-model-pipeline-addition.md&title=";

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

function countModel(modelData: ModelCardProps[]): number {
  return modelData
    .map((model) => (model.modelSpecs ? model.modelSpecs.length : 0))
    .reduce((sum, current) => sum + current, 0);
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

    targetModelData = targetModelData.map((model) => {
      return {
        ...model,
        modelSpecs:
          model.modelSpecs!.filter((modelSpec) =>
            searchData.backends.includes(modelSpec.tags.backend)
          ) || [],
      };
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

    targetModelData = targetModelData.map((model) => {
      return {
        ...model,
        modelSpecs:
          model.modelSpecs!.filter((modelSpec) =>
            searchData.sizes.includes(modelSpec.tags.size)
          ) || [],
      };
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
                    countModel(applySearchConditions(modelData, searchData)) +
                    applySearchConditions(pipelineData, searchData).length
                  }
                  searchData={searchData}
                  setSearchData={setSearchData}
                />
              </Columns.Column>
              <Columns.Column offset={1}>
                <Heading subtitle size={3} mb={1} textTransform="uppercase">
                  <span>Models</span>
                  <Button
                    className="is-link is-light is-rounded ml-5"
                    onClick={() => {
                      window.open(CREATE_ISSUE_URL);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    {"add model"}
                  </Button>
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
                  <span>Pipelines</span>
                  <Button
                    className="is-link is-light is-rounded ml-5"
                    onClick={() => {
                      window.open(CREATE_ISSUE_URL);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    {"add pipeline"}
                  </Button>
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
