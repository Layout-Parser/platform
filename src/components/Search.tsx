import "./../styles/App.scss";
import React from 'react';
import { Block, Tag } from "react-bulma-components";

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


export const SearchTagGroup = ({tagRows}: SearchTagGroupProps) => {
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