import {HeroComponent} from "~/components/hero";
import {FooterComponent} from "~/components/footer";
import {ActivityTeaserComponent} from "~/components/activity-teaser";

export default function Index() {
    return (
        <main className="container mx-auto relative min-h-screen bg-white flex flex-col justify-center p-6">
            <HeroComponent/>
            <section className="prose mt-64 mb-32 mx-auto text-center">
                <h1>Hikes and nice landscapes for everyone 🏔</h1>
                <div className="flex justify-center align-middle text-center">
                    <a href="https://www.instagram.com/der.almohi/" target="_blank">
                        <img src="/ig-instagram.svg" height="32" width="32" alt="Follow us on Instagram"/>
                    </a>
                    <a href="https://www.instagram.com/der.almohi/" target="_blank" className="ml-2 my-auto">Follow us
                        on Instagram</a>
                </div>
            </section>
            <section className="mt-12">
                <div className="prose prose-lg">
                    <h2 className="">Activities in 2020</h2>
                </div>
                <div className="flex flex-wrap mt-6 -mx-2">
                    <ActivityTeaserComponent
                        title="Hallstatt & Hallstätter See"
                        cloudinaryImageName="2020-05-hallstaetter-see-upper-austria_qrvig7"
                        altText="The Hallstätter See with a fishing boat."/>
                    <ActivityTeaserComponent
                        title="Adamekhütte"
                        cloudinaryImageName="2020-05-adamekhuette-gosau-upper-austria_tm5j5a"
                        altText="Looking to the Gosausee while climing up to the Adamekhütte."/>
                    <ActivityTeaserComponent
                        title="Golling"
                        cloudinaryImageName="2020-06-wanderung-golling-salzburg_yp2ocg"
                        altText="Great outlook to the mountains around Golling."/>
                    <ActivityTeaserComponent
                        title="Dreiländereck"
                        cloudinaryImageName="2020-07-dreilaendereck-schwarzenberg-upper-austria_cuwpx9"
                        altText="A rocky way along the Dreiländereck. On the left side is the Czech Republic, on the right side is Austria and behind the back is Germany."/>
                    <ActivityTeaserComponent
                        title="Wilder Kaiser"
                        cloudinaryImageName="2020-07-wilder-kaiser-valley-tyrol_wuyfhm"
                        altText="The valley of Wilder Kaiser with sun and fog."/>
                    <ActivityTeaserComponent
                        title="Ellmauer Tor"
                        cloudinaryImageName="2020-07-wilder-kaiser-ellmauer-tor-tyrol_dwyurz"
                        altText="The Ellmauer Tor on a hot summer day."/>
                    <ActivityTeaserComponent
                        title="Langbathseen"
                        cloudinaryImageName="2020-09-langbathseen-upper-austria_ouozcb"
                        altText="The hinterer Langbathsee next to the forest."/>
                    <ActivityTeaserComponent
                        title="Schreinbachalm"
                        cloudinaryImageName="2020-09-schreinbachalm-upper-austria_pmxhwn"
                        altText="A very cozy alp far away from civilisation."/>
                    <ActivityTeaserComponent
                        title="Brunnkogel"
                        cloudinaryImageName="2020-10-brunnkogel-upper-austria_btiidh"
                        altText="A wonderful landscape at the top of the Brunnkogel."/>
                    <ActivityTeaserComponent
                        title="Katrin"
                        cloudinaryImageName="2020-10-katrin-berg-upper-austria_tqgqcc"
                        altText="The cable car that leads to the top of the mountain Katrin. It's highly recommended to hike instead of using the cable car."/>
                    <ActivityTeaserComponent
                        title="Pesenbachtal"
                        cloudinaryImageName="2022-12-pesenbachtal-upper-austria_vjvu1t"
                        altText="The river in the Pesenbachtal in December."/>
                    <ActivityTeaserComponent
                        title="Mittagsstein"
                        cloudinaryImageName="2020-12-mittagsstein-upper-austria_ld2qsx"
                        altText="Hiking up the Mittagsstein in a snow-covered winter wonderland."/>
                </div>
            </section>

            <FooterComponent/>
        </main>
    );
}
