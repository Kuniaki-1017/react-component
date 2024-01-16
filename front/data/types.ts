// types.ts
export interface User {
    id: number;
    profilePicture: string;
    username: string;
}

export interface Post {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like?: number;
    comment?: number;
}