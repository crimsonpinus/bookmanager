

interface PagePrarm {
    page ?: string | number
    size ?: string | number
}
interface UseCustomMoveReturn {
    moveToList: (pageParam?: PagePrarm) => void
    moveToModify: (bno: number) => void
    moveToRead: (bno: number) => void
    page: number
    size: number
}

interface PageResponse<T> {
    content: T[]
    first: boolean
    last: boolean
    number: number
    pageNumber: number
    pageSize: number
    totalPages: number
    totalElement: number
}

interface ResultModal {
    title: string,
    content: string,
    callbackFn? : () => void
}
