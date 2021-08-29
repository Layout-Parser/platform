import "./../styles/App.scss";
import React from 'react';
import { Block, Tag, Content } from "react-bulma-components";


export interface ModelSpecProps {
    modelConfig: string;
    tags: {
        backend: string;
        size: string;
    }
};

export const ModelSpec = ({ modelConfig, tags }: ModelSpecProps) => {
    return (
        <Tag.Group mb='0'>
            <Tag className="model-config">
                {modelConfig}
            </Tag>
            {
                Object.values(tags).map(
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
    modelSpecs?: ModelSpecProps[]
};

export const ModelCard = ({
    name,
    author,
    docType,
    updateTime,
    modelSpecs,
}: ModelCardProps) => {
    return (
        <React.Fragment>
            <div className="is-divider my-3" />
            <Content mb={2}>
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
                {modelSpecs === undefined ? null : (
                    <Block>
                        {
                            modelSpecs.map(
                                (modelSpec) => (
                                    <ModelSpec {...modelSpec} />
                                )
                            )
                        }
                    </Block>
                )}
            </Content>
        </React.Fragment>
    )
}