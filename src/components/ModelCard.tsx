import "./../styles/App.scss";
import React from 'react';
import { Heading, Icon, Block, Tag, Content } from "react-bulma-components";


export interface ModelSpecProps {
    modelConfig: string;
    tags: string[];
};

export const ModelSpec = ({ modelConfig, tags }: ModelSpecProps) => {
    return (
        <Tag.Group mb='0'>
            <Tag className="model-config">
                {modelConfig}
            </Tag>
            {
                tags.map(
                    (tag) => (
                        <Tag>
                            {tag}
                        </Tag>
                    )
                )
            }
        </Tag.Group>
    )
};

export interface ModelCardProps {
    name: string;
    author: string;
    docType: string;
    updateTime: string;
    modelSpecs: ModelSpecProps[]
};

export const ModelCard = ({
    name,
    author,
    docType,
    updateTime,
    modelSpecs, 
} : ModelCardProps) => {
    return (
        <React.Fragment>
        <div className="is-divider my-3"/>
        <Content>
            <Block mb={2}>
                <Block renderAs="a" textSize={5}>
                    {name}
                </Block>
            </Block>
            <Block mb={2}>
                <span className="model-list-cat mr-2">
                    Author
                </span>
                <span>
                    {author}
                </span>
                <span className="model-list-cat mx-3">
                    -
                </span>
                <span className="model-list-cat mr-2">
                    DocType
                </span>
                <span>
                    {docType}
                </span>
                <span className="model-list-cat mx-3">
                    -
                </span>
                <span className="model-list-cat mr-2">
                    Updated
                </span>
                <span>
                    {updateTime}
                </span>
            </Block>
            <Block>
                {
                    modelSpecs.map(
                        (modelSpec) => (
                            <ModelSpec modelConfig={modelSpec.modelConfig} tags={modelSpec.tags}/>
                        )
                    )
                }
            </Block>
        </Content>
        </React.Fragment>
    )
}