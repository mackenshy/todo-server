
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ProjectStatus {
    OPEN = "OPEN",
    ARCHIVED = "ARCHIVED"
}

export interface ProjectCreateInput {
    name: string;
    description?: string;
}

export interface Project {
    __typename?: 'Project';
    _id: string;
    name: string;
    description?: string;
    status: string;
}

export interface IQuery {
    __typename?: 'IQuery';
    projects(): Project[] | Promise<Project[]>;
    project(id: string): Project | Promise<Project>;
    search(keyword?: string, status?: ProjectStatus): Project[] | Promise<Project[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createProject(input: ProjectCreateInput): Project | Promise<Project>;
}
