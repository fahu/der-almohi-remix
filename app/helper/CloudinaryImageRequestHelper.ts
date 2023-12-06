export enum CloudinaryImageDensity {
  SINGLE = 1.0,
  DOUBLE = 2.0,
  TRIPLE = 3.0,
}

export enum CloudinaryImageFormat {
  JPG = "jpg",
  WEBP = "webp",
  AVIF = "avif"
}

export class CloudinaryImageRequestHelper {
  private static readonly imageBaseUrl = `https://res.cloudinary.com/dbsjhw9tp/image/upload`;

  static getImageUrl(
    publicId: string,
    format: CloudinaryImageFormat,
    density: CloudinaryImageDensity,
    width?: number,
    height?: number
  ): string {
    const dprParameter = `dpr_${density.toFixed(1)}`;
    const widthParameter = width ? `,h_${width}` : "";
    const heightParameter = height ? `,h_${height}` : "";
    return `${
      this.imageBaseUrl
    }/c_scale,${dprParameter}${widthParameter}${heightParameter}/${publicId}.${format.toString()}`;
  }
}
