
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

export enum TaskStatuses {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSE = "CLOSE"
}

export interface ProjectCreateInput {
    name: string;
    description?: string;
}

export interface ProjectUpdateInput {
    name: string;
    description?: string;
    status: ProjectStatus;
}

export interface CreateTaskInput {
    projectId: string;
    name: string;
    description?: string;
}

export interface UpdateTaskInput {
    name: string;
    description?: string;
    status: TaskStatuses;
}

export interface Project {
    __typename?: 'Project';
    _id: string;
    name: string;
    description?: string;
    status: ProjectStatus;
    tasks?: Task[];
}

export interface IQuery {
    __typename?: 'IQuery';
    projects(): Project[] | Promise<Project[]>;
    project(id: string): Project | Promise<Project>;
    search(keyword?: string, status?: ProjectStatus): Project[] | Promise<Project[]>;
    task(id: string): Task | Promise<Task>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createProject(input: ProjectCreateInput): Project | Promise<Project>;
    updateProject(id: string, input: ProjectUpdateInput): Project | Promise<Project>;
    updateProjectStatus(id: string, status: ProjectStatus): Project | Promise<Project>;
    createTask(input: CreateTaskInput): Task | Promise<Task>;
    updateTask(id: string, input: UpdateTaskInput): Task | Promise<Task>;
    updateTaskStatus(id: string, status: TaskStatuses): Task | Promise<Task>;
}

export interface Task {
    __typename?: 'Task';
    _id: string;
    name: string;
    description?: string;
    status: TaskStatuses;
}
