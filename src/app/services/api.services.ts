import {baseUrl} from "@/app/constants/urls";

const fetchDataByEndpoint = async <T>(endpoint: string): Promise<T[]> => {
    const response = await fetch(baseUrl + endpoint);
    return await response.json() as Promise<T[]>;
}

const fetchDataByIdByEndpoint = async <T>(endpoint:string, id:string):Promise<T> => {
    const response = await fetch(baseUrl + endpoint + "/" + id);
    return await response.json() as Promise<T>;
}

export {
    fetchDataByEndpoint,
    fetchDataByIdByEndpoint
}