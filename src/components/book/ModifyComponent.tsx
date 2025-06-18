import {ChangeEvent, useEffect, useState} from "react";
import {deleteOne, getOne, putOne} from "../../api/bookApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";
import ResultModal from "../common/resultModal.tsx";

const initState: Book = {
    id: 0,
    name:  '',
    author: '',
    description: '',
    in_qty: 0,
    sold_qty: 0,
    isbn: '',
    price: 0,
    reg_date: ''
}

function ModifyComponent({bno}: {bno: number}) {

    const [book, setBook] = useState<Book>({...initState})

    const [result, setResult] = useState<string | null>(null)

    const {moveToList, moveToRead} = useCustomMove()

    useEffect(() => {
        getOne(bno).then(data => {
            console.log(data)
            setBook(data)
        })
    },[bno])

    const handleChangeBook = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setBook((prevState) => ({
            ...prevState,
            [name]: ['in_qty', 'sold_qty', 'price'].includes(name) ? Number(value) : value
        }));
    }

    const handleClickModify = () => {
        const bookModify: BookModify = {
            id: book.id,
            name: book.name,
            author: book.author,
            description: book.description,
            in_qty: book.in_qty,
            sold_qty: book.sold_qty,
            isbn: book.isbn,
            price: book.price,
        }
        putOne(bookModify)
            .then(data => {
                console.log("modify result" + data)
                setResult('변경되었습니다.')
        })
    }

    const handleClickDelete = () => {
        deleteOne(bno)
            .then(data => {
                console.log("delete result" + data)
                setResult('삭제되었습니다.')
            })
    }

    const closeModal = () => {
        if(result === '삭제되었습니다.') {
            moveToList()
        } else {
            moveToRead(bno)
        }
        setResult(null)
    }

    return (
        <>
            <div className="border-2 border-sky-200 mt-10 m-2 p-4">
                {result && <ResultModal title='처리결과' content={result} callbackFn={closeModal}/>}
                <div className="flex justify-center mt-10">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">ID</div>
                        <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                            {book.id}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">제목</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="name"
                               type={'text'}
                               value={book.name}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">작가</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="author"
                               type={'text'}
                               value={book.author}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">책 설명</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="description"
                               type={'text'}
                               value={book.description}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">입고 수량</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="in_qty"
                               type={'number'}
                               value={book.in_qty}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">출고 수량</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="sold_qty"
                               type={'number'}
                               value={book.sold_qty}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">ISBN</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="isbn"
                               type={'text'}
                               value={book.isbn}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-1/5 p-6 text-right font-bold">가격</div>
                        <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="price"
                               type={'number'}
                               value={book.price}
                               onChange={handleChangeBook}
                        >
                        </input>
                    </div>
                </div>


                <div className="flex justify-end p-4">
                    <button type="button"
                            className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                            onClick={handleClickDelete}
                    >
                        Delete
                    </button>
                    <button type="button"
                            className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                            onClick={handleClickModify}
                    >
                        Modify
                    </button>
                </div>
            </div>

        </>
    )
}

export default ModifyComponent
