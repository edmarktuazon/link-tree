/** @format */

import { createRouter, createWebHistory } from "vue-router";
import WelcomeItem from "../components/WelcomeItem.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: WelcomeItem,
		},
		{
			path: "/github",
			name: "github",
			component: () => {
				window.location.href = "https://github.com/edmarktuazon";
				return null;
			},
		},
		{
			path: "/portfolio",
			name: "portfolio",
			component: () => {
				window.location.href = "https://edmarktuazon.herokuapp.com/";
				return null;
			},
		},
		{
			path: "/linkedin",
			name: "linkedin",
			component: () => {
				window.location.href = "https://www.linkedin.com/in/edmarktuazon/";
				return null;
			},
		},
		{
			path: "/facebook",
			name: "facebook",
			component: () => {
				window.location.href = "https://www.facebook.com/edmarktuazon.fb/";
				return null;
			},
		},
		{
			path: "/instagram",
			name: "instagram",
			component: () => {
				window.location.href = "https://www.instagram.com/edmark.io/";
				return null;
			},
		},
		{
			path: "/email",
			name: "email",
			component: () => {
				window.location.href = "mailto:edmarktuazon03@gmail.com";
			},
		},
	],
});
export default router;
