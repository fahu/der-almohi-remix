import {CloudinaryImageDensity, CloudinaryImageFormat, CloudinaryImageService} from "~/services/CloudinaryImageService";

type ActivityTeaserComponentProps = {
    title: string
    cloudinaryImageName: string
    altText: string
}

export const ActivityTeaserComponent = ({title, cloudinaryImageName, altText}: ActivityTeaserComponentProps) => {
    const webpSrcSet = `
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.WEBP, CloudinaryImageDensity.SINGLE, undefined, 256)} 1x,
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.WEBP, CloudinaryImageDensity.DOUBLE, undefined, 256)} 2x,
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.WEBP, CloudinaryImageDensity.TRIPLE, undefined, 256)} 3x`;

    const jpgSrcSet = `
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.JPG, CloudinaryImageDensity.SINGLE, undefined, 256)} 1x,
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.JPG, CloudinaryImageDensity.DOUBLE, undefined, 256)} 2x,
        ${CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.JPG, CloudinaryImageDensity.TRIPLE, undefined, 256)} 3x`;

    return (
        <header
            className="flex-none basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 h-96 px-2 rounded-xl">
            <div className="flex flex-col">
                <picture>
                    <source type="image/webp" srcSet={webpSrcSet}></source>
                    <source type="image/jpg" srcSet={jpgSrcSet}></source>
                    <img className="h-64 m-0 top-0 rounded-xl w-auto object-cover"
                         src={CloudinaryImageService.getImageUrl(cloudinaryImageName, CloudinaryImageFormat.JPG, CloudinaryImageDensity.SINGLE, undefined, 256)}
                         srcSet={jpgSrcSet}
                         alt={altText}
                         loading="lazy"
                         height="256"/>
                </picture>

                <div className="prose mt-4">
                    <h3 className="text-2xl">{title}</h3>
                </div>
            </div>
        </header>
    );
}
