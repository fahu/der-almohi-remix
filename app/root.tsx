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
      { rel: "preload", as: "image", href: "https://res.cloudinary.com/dbsjhw9tp/image/upload/c_scale,w_1488/v1650748932/der-almohi-hero-schneiderberg-gruenau-2021_i1s7vp.jpg" }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
  });
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
