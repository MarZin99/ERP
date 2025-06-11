export type ApiResult = {
    isSuccess: boolean,
    error: ApiError,
}

export type ApiError = {
    message: string,
}