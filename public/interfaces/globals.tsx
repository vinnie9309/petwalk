export interface UserChat {
    id: string;
    data: ChatData
}

export interface ChatData {
    combinedId: string;
    date: string;
    username: string;
};
