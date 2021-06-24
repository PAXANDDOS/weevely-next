const path = require("path")
const mode = process.env.NODE_ENV === "production"

module.exports = {
	basePath: "",
	distDir: ".next",
	compress: true,
	generateEtags: true,
	trailingSlash: false,
	poweredByHeader: true,
	pageExtensions: ["js", "jsx"],
	sassOptions: {
		includePaths: [path.join(__dirname, "./src/styles")],
	},
	eslint: {
		ignoreDuringBuilds: false,
	},
	assetPrefix: mode ? "http://cdn.localhost" : "",
}