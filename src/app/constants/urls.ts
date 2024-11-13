import IEndpoints from "@/app/models/IEndpoints";

const baseUrl: string = "https://jsonplaceholder.typicode.com";

const endpoints: IEndpoints = {
    users: "/users",
    comments: "/comments",
    posts: "/posts"
}

export {
    baseUrl,
    endpoints
}