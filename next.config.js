/** @type {import('next').NextConfig} */
// const nextConfig = {}
// module.exports = nextConfig
module.exports = {
    images: {
        domains: ["skillicons.dev"]
    },
    async rewrites() {
        return [
            {
                source: '/projects/:slug',
                destination: '/ProjectView'
            }
        ]
    }
}