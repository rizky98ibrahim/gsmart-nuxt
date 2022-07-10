import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// server side rendering mode
	ssr: true,

	app: {
		head: {
			title: "G-SMART" || "",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=no" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	// Auto Import Components
	components: true,

	// CSS
	css: [],

	// Plugins
	plugins: [],
	modules: [],
	buildModules: [],
	build: {},

	// Content
	content: {},
});
