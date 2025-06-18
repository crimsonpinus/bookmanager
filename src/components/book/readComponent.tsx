import {useEffect, useState} from "react";
import {getOne} from "../../api/bookApi.tsx";
import useCustomMove from "../../hooks/useCustomMove.tsx";
import {formatRegDate} from "../../utils/dateUtils.ts";


function ReadComponent({bno}: {bno:number}) {

    const [book, setBook] = useState<Book | undefined>()

    const {moveToList, moveToModify} = useCustomMove()

    useEffect(() => {
        getOne(bno).then(data => {
            setBook(data)
        })
    },[bno])

    return (
        <>
            {book &&
                <>
                    <div className="border-2 border-sky-200 mt-10 m-2 p-4 text-2xl">
                        {makeDiv('No', book.id)}
                        {makeDiv('제목', book.name)}
                        {makeDiv('저자', book.author)}
                        {makeDiv('설명', book.description)}
                        {makeDiv('ISBN', book.isbn)}
                        {makeDiv('등록일', formatRegDate(book.reg_date))}
                        {makeDiv('가격', book.price)}
                        {makeDiv('입고', book.in_qty)}
                        {makeDiv('출고', book.sold_qty)}
                        {makeDiv('재고', book.in_qty - book.sold_qty)}
                    </div>
                    <div className="flex justify-end p-4">

                        <button type="button"
                                className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                                onClick={() => moveToList()}
                        >
                            List
                        </button>
                        <button type="button"
                                className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                                onClick={() => moveToModify(bno)}
                        >
                            Modify
                        </button>
                    </div>


                </>
            }
        </>
    )
}

const makeDiv = (title: string, value: string | number) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
                {value}
            </div>
        </div>
    </div>

export default ReadComponent;
