export const getStrapiUrl = (path = "") => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://0.0.0.0:1337"}${path}`;
};