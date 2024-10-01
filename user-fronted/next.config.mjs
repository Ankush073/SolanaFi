/** @type {import('next').NextConfig} */
const config = {
    images: {
        loader: "imgix",
        path:"https://d3ht4cfil3o7iv.cloudfront.net",
        domains: ['d3ht4cfil3o7iv.cloudfront.net'],
    },
};

export default config;
