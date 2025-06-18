

interface PageComponentProps<T> {
    listData: PageResponse<T>,
    movePage: ({page}: PagePrarm) => void
}

function PageComponent({listData, movePage}: PageComponentProps<any>) {

    const currentPageUI = listData.number + 1;
    const start = Math.floor(listData.number / listData.size) * listData.size + 1;
    const end = Math.min(start + 9, listData.total_pages);
    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    return (
        <>
            <div className="m-6 flex justify-center">
                {!listData.first ?
                    <div
                        className="m-2 p-2 w-16 text-center font-bold text-blue-400 "
                        onClick={() => movePage({page: currentPageUI - 1})}>
                        Prev </div> : <></>}
                {pages.map(pageNum =>
                    <div
                        key={pageNum}
                        className={`m-2 p-2 w-12 text-center rounded shadow-md text-white ${currentPageUI === pageNum ? 'bg-gray-500' : 'bg-blue-400'}`}
                        onClick={() => movePage({page: pageNum})}>
                        {pageNum}
                    </div>
                )}
                {!listData.last ?
                    <div
                        className="m-2 p-2 w-16 text-center font-bold text-blue-400"
                        onClick={() => movePage({page: currentPageUI + 1})}>
                        Next
                    </div> : <></>}
            </div>

        </>
    )
}

export default PageComponent
