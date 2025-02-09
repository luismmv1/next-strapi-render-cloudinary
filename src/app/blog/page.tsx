import PageCardImage from "../components/PageCardImage";
import PageHeader from "../components/PageHeader";
import PagePagination from "../components/PagePagination";
import { fetchApi } from "../helpers/fetch-api";
import { Post } from "../interfaces/post";

const getData = async (page = 1, pageSize = 2) => {

    const path = "/posts";
    const urlParamsObject = {
        populate: "*",
        sort: {
            createdAt: "asc",
        },
        pagination:
        {
            page: page,
            pageSize: pageSize,
        },

    }
    const {data, meta} = await fetchApi(path, urlParamsObject);
    return {
        data,
        pagination: meta.pagination,
    };
};

interface Props {
    searchParams: {
        page?: string;
    }
}


const Blog = async ({ searchParams }: Props) => {
    const { page } = searchParams;

    let pageNumber = page ? parseInt(page) : 1;
    if (isNaN(pageNumber) || pageNumber < 1) {
        pageNumber = 1;
    }
    console.log(searchParams)
    const { data, pagination } = await getData(pageNumber);
    return (
        <div>
            <PageHeader text="Latest Posts" />
            <h1 className="mb-5 mt-10 text-3xl text-center">Blog</h1>
            <PagePagination pagination={pagination} />
            <div className="grip gap-4 mt-5 mb-5">
                {
                    data.map((post: Post) => (
                        <PageCardImage
                            key={post.id}
                            post={post}
                        />

                        
                    ))
                }
            </div>
            {/* <PagePagination pagination={pagination} /> */}
        </div>
      
    )
};

export default Blog;