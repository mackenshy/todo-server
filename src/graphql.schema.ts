
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface ProjectCreateInput {
    name: string;
    description?: string;
}

export interface IQuery {
    __typename?: 'IQuery';
    projects(): Project[] | Promise<Project[]>;
    project(id: string): Project | Promise<Project>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createProject(input: ProjectCreateInput): Project | Promise<Project>;
}

export interface Project {
    __typename?: 'Project';
    _id: string;
    name: string;
    description?: string;
    status: string;
}
