export interface BankUser {
    userId: number,
    userName: string,
    emailId: string,
    fullName: string,
    password: string
}

export interface IBankUserList extends BankUser{
    role: string,
    createdDate: string,
    projectName: string,
    refreshToken: any,
    refreshTokenExpiryTime: any
}

export interface IApiResponse {
    message: string,
    result: boolean,
    data: any
}