import { HeroComponent } from "~/components/hero";
import { FooterComponent } from "~/components/footer";
import { ActivityTeaserComponent } from "~/components/activity-teaser";
import { CloudinaryImageSearchService } from "~/services/CloudinaryImageSearchService";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import type { CloudinaryImage } from "~/models/CloudinaryImage";

interface ActivityData {
  2020: CloudinaryImage[];
  2021: CloudinaryImage[];
  2022: CloudinaryImage[];
  2023: CloudinaryImage[];
}

export const loader: LoaderFunction = async (): Promise<ActivityData> => {
  const cloudinaryImageSearchService = new CloudinaryImageSearchService();

  return {
    2020: await cloudinaryImageSearchService.searchForImagesInFolder(
      "der-almohi/2020"
    ),
    2021: await cloudinaryImageSearchService.searchForImagesInFolder(
      "der-almohi/2021"
    ),
    2022: await cloudinaryImageSearchService.searchForImagesInFolder(
      "der-almohi/2022"
    ),
    2023: await cloudinaryImageSearchService.searchForImagesInFolder(
      "der-almohi/2023"
    ),
  };
};

export default function Index() {
  const activityData = useLoaderData<ActivityData>();

  return (
    <main className="container relative mx-auto flex min-h-screen flex-col justify-center bg-white p-6">
      <HeroComponent />
      <section className="prose mx-auto mt-64 mb-32 text-center">
        <h1>Hikes and nice landscapes for everyone 🏔</h1>
        <div className="flex justify-center text-center align-middle">
          <a
            href="https://www.instagram.com/der.almohi/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/ig-instagram.svg"
              height="32"
              width="32"
              alt="Follow us on Instagram"
            />
          </a>
          <a
            href="https://www.instagram.com/der.almohi/"
            target="_blank"
            className="my-auto ml-2"
            rel="noreferrer"
          >
            Follow us on Instagram
          </a>
        </div>
      </section>

      {activityData["2023"].length > 0 && (
        <section className="mt-12">
          <div className="prose prose-lg">
            <h2 className="">Activities in 2023</h2>
          </div>
          <div className="-mx-2 mt-6 flex flex-wrap">
            {activityData["2023"].map((image) => (
              <ActivityTeaserComponent
                key={image.asset_id}
                title={image.context?.caption ?? ""}
                cloudinaryImageName={image.public_id}
                altText={image.context?.alt ?? ""}
              />
            ))}
          </div>
        </section>
      )}

      {activityData["2022"].length > 0 && (
        <section className="mt-12">
          <div className="prose prose-lg">
            <h2 className="">Activities in 2022</h2>
          </div>
          <div className="-mx-2 mt-6 flex flex-wrap">
            {activityData["2022"].map((image) => (
              <ActivityTeaserComponent
                key={image.asset_id}
                title={image.context?.caption ?? ""}
                cloudinaryImageName={image.public_id}
                altText={image.context?.alt ?? ""}
              />
            ))}
          </div>
        </section>
      )}

      {activityData["2021"].length > 0 && (
        <section className="mt-12">
          <div className="prose prose-lg">
            <h2 className="">Activities in 2021</h2>
          </div>
          <div className="-mx-2 mt-6 flex flex-wrap">
            {activityData["2021"].map((image) => (
              <ActivityTeaserComponent
                key={image.asset_id}
                title={image.context?.caption ?? ""}
                cloudinaryImageName={image.public_id}
                altText={image.context?.alt ?? ""}
              />
            ))}
          </div>
        </section>
      )}

      {activityData["2020"].length > 0 && (
        <section className="mt-12">
          <div className="prose prose-lg">
            <h2 className="">Activities in 2020</h2>
          </div>
          <div className="-mx-2 mt-6 flex flex-wrap">
            {activityData["2020"].map((image) => (
              <ActivityTeaserComponent
                key={image.asset_id}
                title={image.context?.caption ?? ""}
                cloudinaryImageName={image.public_id}
                altText={image.context?.alt ?? ""}
              />
            ))}
          </div>
        </section>
      )}

      <FooterComponent />
    </main>
  );
}
