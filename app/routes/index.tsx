import {HeroComponent} from "~/components/hero";
import {FooterComponent} from "~/components/footer";
import {ActivityTeaserComponent} from "~/components/activity-teaser";
import {CloudinaryImageSearchService} from "~/services/CloudinaryImageSearchService";
import {useLoaderData} from "@remix-run/react";
import type {LoaderFunction} from "@remix-run/node";
import type {CloudinaryImage} from "~/models/CloudinaryImage";

interface ActivityData {
    2020: CloudinaryImage[],
    2021: CloudinaryImage[],
    2022: CloudinaryImage[],
}

export const loader: LoaderFunction = async (): Promise<ActivityData> => {
    const cloudinaryImageSearchService = new CloudinaryImageSearchService();

    return {
        2020: await cloudinaryImageSearchService.searchForImagesInFolder('der-almohi/2020'),
        2021: await cloudinaryImageSearchService.searchForImagesInFolder('der-almohi/2021'),
        2022: await cloudinaryImageSearchService.searchForImagesInFolder('der-almohi/2022'),
    };
};

export default function Index() {
    const activityData = useLoaderData<ActivityData>();

    return (
        <main className="container mx-auto relative min-h-screen bg-white flex flex-col justify-center p-6">
            <HeroComponent/>
            <section className="prose mt-64 mb-32 mx-auto text-center">
                <h1>Hikes and nice landscapes for everyone 🏔</h1>
                <div className="flex justify-center align-middle text-center">
                    <a href="https://www.instagram.com/der.almohi/" target="_blank" rel="noreferrer">
                        <img src="/ig-instagram.svg" height="32" width="32" alt="Follow us on Instagram"/>
                    </a>
                    <a href="https://www.instagram.com/der.almohi/" target="_blank" className="ml-2 my-auto"
                       rel="noreferrer">Follow us
                        on Instagram</a>
                </div>
            </section>

            {activityData["2022"].length > 0 &&
                <section className="mt-12">
                    <div className="prose prose-lg">
                        <h2 className="">Activities in 2022</h2>
                    </div>
                    <div className="flex flex-wrap mt-6 -mx-2">
                        {activityData["2022"].map((image) => (
                            <ActivityTeaserComponent
                                key={image.asset_id}
                                title={image.context?.caption ?? ''}
                                cloudinaryImageName={image.public_id}
                                altText={image.context?.alt ?? ''}/>
                        ))}
                    </div>
                </section>
            }

            {activityData["2021"].length > 0 &&
                <section className="mt-12">
                    <div className="prose prose-lg">
                        <h2 className="">Activities in 2021</h2>
                    </div>
                    <div className="flex flex-wrap mt-6 -mx-2">
                        {activityData["2021"].map((image) => (
                            <ActivityTeaserComponent
                                key={image.asset_id}
                                title={image.context?.caption ?? ''}
                                cloudinaryImageName={image.public_id}
                                altText={image.context?.alt ?? ''}/>
                        ))}
                    </div>
                </section>
            }

            {activityData["2020"].length > 0 &&
                <section className="mt-12">
                    <div className="prose prose-lg">
                        <h2 className="">Activities in 2020</h2>
                    </div>
                    <div className="flex flex-wrap mt-6 -mx-2">
                        {activityData["2020"].map((image) => (
                            <ActivityTeaserComponent
                                key={image.asset_id}
                                title={image.context?.caption ?? ''}
                                cloudinaryImageName={image.public_id}
                                altText={image.context?.alt ?? ''}/>
                        ))}
                    </div>
                </section>
            }

            <FooterComponent/>
        </main>
    );
}
