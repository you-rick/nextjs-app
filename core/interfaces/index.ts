import {NextPageContext} from "next";

export interface PostInterface {
    id: number | string,
    title: string
    body: string
}

export interface PostNextPageContent extends NextPageContext {
    query: {
        id: string
    }
}
