import {useSearchParams} from "react-router";
import ListComponent from "../../components/book/listComponent.tsx";

function ListPage() {
    const [queryParams] = useSearchParams()

    const page: string | null = queryParams.get("page")
    const size: string | null = queryParams.get("size")

    return (
        <div className="bg-white w-full">
            <div className="text-4xl">도서 목록</div>
            <ListComponent/>
        </div>
    );
}
export default ListPage;
