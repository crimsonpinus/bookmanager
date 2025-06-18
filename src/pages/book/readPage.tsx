import {useParams} from "react-router";
import ReadComponent from "../../components/book/readComponent.tsx";


function ReadPage() {
    const {bno} = useParams()

    return (
        <div className="bg-white w-full">
            <div className="text-4xl">도서 정보</div>
            <ReadComponent bno={Number(bno)}/>
        </div>
    );
}

export default ReadPage;
