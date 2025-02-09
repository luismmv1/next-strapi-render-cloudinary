interface Props {
    text: string;
};
const PageHeader = ({ text }: Props) => {
    return (
        <h1
        className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-5 mb-5">
            {text}
        </h1>
    );
};

export default PageHeader;
