import {useParams} from "react-router";
import ModifyComponent from "../../components/book/ModifyComponent.tsx";


function ModifyPage() {
    const {bno} = useParams()

    return (
        <div className="bg-white w-full">
            <div className="text-4xl">도서 수정</div>
            <ModifyComponent bno={Number(bno)}/>
        </div>
    );
}

export default ModifyPage;
