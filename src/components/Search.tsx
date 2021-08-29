import "./../styles/App.scss";
import React from 'react';
import { Heading, Form, Icon, Block, Tag } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export interface SearchTagRowProps {
    title: string;
    tags: string[];
};

export const SearchTagRow = ({ title, tags }: SearchTagRowProps) => {
    return (
        <Tag.Group>
            <Tag color="white">
                <strong>{title}</strong>
            </Tag>

            {
                tags.map((
                    (tag) => (
                        <Tag className="is-clickable">
                            {tag}
                        </Tag>
                    )
                ))
            }
        </Tag.Group>
    )
};

export interface SearchTagGroupProps {
    tagRows: SearchTagRowProps[];
};

export const SearchTagGroup = ({ tagRows }: SearchTagGroupProps) => {
    const lastRowIndex = tagRows.length - 1;
    return (
        <Block>
            {
                tagRows.map(
                    (tagRow, i) => (
                        <Block mb={(i === lastRowIndex ? 0 : 3)}>
                            <SearchTagRow title={tagRow.title} tags={tagRow.tags} />
                        </Block>
                    ))
            }
        </Block>
    )
};

export interface SearchPanelProps {
    totalModelCount: Number;
    searchTagRows: SearchTagRowProps[];
};

export const SearchPanel = ({ totalModelCount, searchTagRows }: SearchPanelProps) => {
    return (
        <React.Fragment>
            <Heading subtitle italic mb={4} textColor="grey-lighter">
                Type to search among {totalModelCount} layout models
            </Heading>
            <Form.Field>
                <Form.Control>
                    <Form.Input
                        color="link"
                        placeholder="PubLayNet"
                        onChange={(e) => { }} />
                    <Icon align="right" size="small">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <SearchTagGroup tagRows={searchTagRows} />
        </React.Fragment>
    )
}