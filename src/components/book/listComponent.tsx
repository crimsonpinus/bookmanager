import useCustomMove from "../../hooks/useCustomMove.tsx";
import {useEffect, useState} from "react";
import {getList} from "../../api/bookApi.tsx";
import PageComponent from "../common/pageComponent.tsx";


function ListComponent() {

    const {page, size, moveToRead, moveToList} = useCustomMove()

    const [searchType, setSearchType] = useState<'name' | 'author'>('name');
    const [searchText, setSearchText] = useState('');

    const [flag, setFlag] = useState(false)

    const [listData, setListData] = useState<PageResponse<Book> | undefined>()
    useEffect(() => {
        getList(page - 1,size, searchType,searchText).then(data => {
            console.log(data)
            setListData(data)
        })
    },[page, size, flag])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setFlag(prev => !prev)
    };


    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
            <form onSubmit={handleSearch} className="flex items-center justify-center gap-2 p-4">
                <div className="flex items-center">
                    <label className="mr-2 font-bold">검색구분</label>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-l ${searchType === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSearchType('name')}
                    >
                        제목
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-r ${searchType === 'author' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSearchType('author')}
                    >
                        작가
                    </button>
                </div>
                <input
                    type="text"
                    className="border rounded px-4 py-2 ml-4"
                    placeholder={searchType === 'name' ? "제목을 입력하세요" : "작가를 입력하세요"}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
                <button
                    type="submit"
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    검색
                </button>
            </form>
            {listData &&
                <>
                    <div className="flex flex-wrap mx-auto justify-center p-6">
                        {listData?.content.map(book =>
                            <div
                                key={book.id}
                                className="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
                                onClick={() => moveToRead(book.id)} //이벤트 처리 추가
                            >
                                <div className="flex ">
                                    <div className="font-extrabold text-2xl p-2 w-5/12">
                                        {book.name}
                                    </div>
                                    <div className="text-1xl m-1 p-2 w-3/12 font-extrabold">
                                        {book.author}
                                    </div>
                                    <div className="text-1xl m-1 p-2 w-4/10 font-medium">
                                        {book.description}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <PageComponent listData={listData} movePage={moveToList}/>
                </>
            }
        </div>

    )
}

export default ListComponent
