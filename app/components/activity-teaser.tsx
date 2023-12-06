import {
  CloudinaryImageDensity,
  CloudinaryImageFormat,
  CloudinaryImageRequestHelper,
} from "~/helper/CloudinaryImageRequestHelper";

type ActivityTeaserComponentProps = {
  title: string;
  cloudinaryImageName: string;
  altText: string;
};

export const ActivityTeaserComponent = ({
  title,
  cloudinaryImageName,
  altText,
}: ActivityTeaserComponentProps) => {
  const webpSrcSet = `
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.WEBP,
          CloudinaryImageDensity.SINGLE,
          undefined,
          256
        )} 1x,
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.WEBP,
          CloudinaryImageDensity.DOUBLE,
          undefined,
          256
        )} 2x,
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.WEBP,
          CloudinaryImageDensity.TRIPLE,
          undefined,
          256
        )} 3x`;

  const jpgSrcSet = `
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.JPG,
          CloudinaryImageDensity.SINGLE,
          undefined,
          256
        )} 1x,
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.JPG,
          CloudinaryImageDensity.DOUBLE,
          undefined,
          256
        )} 2x,
        ${CloudinaryImageRequestHelper.getImageUrl(
          cloudinaryImageName,
          CloudinaryImageFormat.JPG,
          CloudinaryImageDensity.TRIPLE,
          undefined,
          256
        )} 3x`;

  return (
    <header className="h-96 flex-none basis-full rounded-xl px-2 sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4">
      <div className="flex flex-col">
          <img
            className="top-0 m-0 h-64 w-auto rounded-xl object-cover"
            src={CloudinaryImageRequestHelper.getImageUrl(
              cloudinaryImageName,
              CloudinaryImageFormat.JPG,
              CloudinaryImageDensity.SINGLE
            )}
            alt={altText}
            height="256"
          />
        <div className="prose mt-4">
          <h3 className="text-2xl">{title}</h3>
        </div>
      </div>
    </header>
  );
};
