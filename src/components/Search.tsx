import "./../styles/App.scss";
import React from 'react';
import { Heading, Form, Icon, Block, Tag } from "react-bulma-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export interface TagRowData {
    title: string;
    tags: string[];
};

export interface SearchData {
    "text": String;
    doctype: String[];
    backends: String[];
    sizes: String[];
}

export interface SearchTagRowProps {
    data: TagRowData;
    searchData: SearchData;
    setSearchData(value: SearchData): void;
};

function updateSearchRowData(rowData: String[], tag:string): String[] {
    const index = rowData.indexOf(tag);
    if (index > -1) {
        rowData.splice(index, 1);
    } else {
        rowData.push(tag);
    }
    return rowData;
}

function isSelectedTag(title: String, tag: String, searchData: SearchData): Boolean {
    if (title === "Document Type") return searchData.doctype.includes(tag);
    else if (title === "Backends") return searchData.backends.includes(tag);
    else return searchData.sizes.includes(tag);
}

export const SearchTagRow = ({ data, searchData, setSearchData }: SearchTagRowProps) => {
    return (
        <Tag.Group>
            <Tag color="white">
                <strong>{data.title}</strong>
            </Tag>

            {
                data.tags.map((
                    (tag, i) => (
                        <Tag
                            key={i}
                            className={isSelectedTag(data.title, tag, searchData)? "is-selected" : "is-clickable"}
                            onClick={(e: any) => {
                                if (data.title === "Document Type") {
                                    setSearchData({
                                        ...searchData,
                                        doctype: updateSearchRowData(searchData.doctype, e.target.textContent)
                                    })
                                } else if (data.title === "Backends") {
                                    setSearchData({
                                        ...searchData,
                                        backends: updateSearchRowData(searchData.backends, e.target.textContent)
                                    })
                                } else { // Model Sizes
                                    setSearchData({
                                        ...searchData,
                                        backends: updateSearchRowData(searchData.sizes, e.target.textContent)
                                    })
                                }
                            }}
                        >
                            {tag}
                        </Tag>
                    )
                ))
            }
        </Tag.Group>
    )
};

export interface SearchTagGroupProps {
    tagRows: TagRowData[];
    searchData: SearchData;
    setSearchData(value: SearchData): void;
};

export const SearchTagGroup = ({ tagRows, searchData, setSearchData }: SearchTagGroupProps) => {
    const lastRowIndex = tagRows.length - 1;
    return (
        <Block>
            {
                tagRows.map(
                    (tagRow, i) => (
                        <Block mb={(i === lastRowIndex ? 0 : 3)} key={i}>
                            <SearchTagRow
                                data={tagRow}
                                searchData={searchData}
                                setSearchData={setSearchData}
                            />
                        </Block>
                    ))
            }
        </Block>
    )
};

export interface SearchPanelProps {
    totalModelCount: Number;
    searchTagRows: TagRowData[];
    searchData: SearchData;
    setSearchData(value: SearchData): void;
};

export const SearchPanel = ({ totalModelCount, searchTagRows, searchData, setSearchData }: SearchPanelProps) => {
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
                        onChange={(e) => {
                            setSearchData({
                                ...searchData,
                                text: e.target.value
                            });
                        }} />
                    <Icon align="right" size="small">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <SearchTagGroup
                tagRows={searchTagRows}
                searchData={searchData}
                setSearchData={setSearchData}
            />
        </React.Fragment>
    )
}