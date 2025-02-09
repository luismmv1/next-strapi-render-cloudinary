import PageHeader from "@/app/components/PageHeader";
import { fetchApi } from "@/app/helpers/fetch-api";
import { formatDate } from "@/app/helpers/format-data-helper";
import { Post } from "@/app/interfaces/post";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";



const getData = async (slug = "") => {
    const path = "/posts";
    const urlParamsObject = {
        populate: "image",
        filters: {
            slug: slug,
        },
    };
    const { data } = await fetchApi(path, urlParamsObject);
    return data[0];
};

interface Props {
    params: {
        slug: string;
    }
}

const Slug = async ({ params }: Props) => {
    const { slug } = params;
    const post: Post = await getData(slug);
    if (!post) {
        return notFound();
    }

    const { title, description, body, image, createdAt } = post;
    const { url, width, height } = image.formats.large;


    
    return (
        <div className="space-y-8">
            <PageHeader text={title} />
            <p
                className="my-4 text-lg text-gray-500 dark:text-gray-400"
            >
                {formatDate(createdAt)}
            </p>
            <Image
                className="h-auto rounded-lg"
                src={url}
                alt={`image de ${title}`}
                width={width}
                height={height}
            />
            <blockquote
                className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                <p
                    className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"{description}"
                </p>
            </blockquote>
            <div className="">
            {body.map((paragraph, index) => (
                <div key={index}>
                    <p
                        className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400"
                    >
                        {paragraph.children.map((child, childIndex) => (
                            <span key={childIndex}>{child.text}</span>
                        ))}
                    </p>
                </div>
            ))}
            </div>
            <Link
                href="/blog"
                className="mt-5 mb-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
                Volver
                <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </Link>
        </div>
    )
};

export default Slug