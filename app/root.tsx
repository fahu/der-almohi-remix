import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href: "https://res.cloudinary.com" },
    {
      rel: "preload",
      as: "image",
      href: "https://res.cloudinary.com/dbsjhw9tp/image/upload/f_auto/v1653757476/der-almohi/der-almohi-hero-illustration.ai",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Der Almöhi - Hikes and nice landscapes for everyone 🏔",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({});
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
