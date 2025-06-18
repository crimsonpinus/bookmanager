import {ChangeEvent, useState} from "react";
import {postAdd} from "../../api/bookApi.tsx";
import ResultModal from "../common/resultModal.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";

const initState: BookAdd = {
    name:  '',
    author: '',
    description: '',
    in_qty: 0,
    isbn: '',
    price: 0
}
function AddComponent() {

    const [book, setBook] = useState<BookAdd>({...initState})
    const [result, setResult] = useState<number | null>(null)
    const {moveToList} = useCustomMove()
    const handleChangeBook = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setBook((prevState) => ({
            ...prevState,
            [name]: ['in_qty', 'price'].includes(name) ? Number(value) : value
        }));
    }

    const handleClickAdd = (): void => {
        postAdd(book)
            .then(result => {
                console.log(result)
                setResult(result.id)
                setBook({...initState})
            }).catch(e => {
                console.error(e)
        })
    }

    const closeModal = () => {
        setResult(null)
        moveToList()
    }
    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">

            {result && <ResultModal title="등록 처리 완료" content={`${result}번 등록 완료`} callbackFn={closeModal} /> }
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


            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button"
                            className="rounded p-4 w-36 bg-blue-500 text-xl text-white "
                            onClick={handleClickAdd}
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AddComponent
