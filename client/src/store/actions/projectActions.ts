export const ADD_PROJECT = "ADD_PROJECT";

export function addProject(project: any){
    return {type: ADD_PROJECT, payload: project}
}

