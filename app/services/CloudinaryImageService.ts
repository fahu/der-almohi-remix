export enum CloudinaryImageDensity {
    SINGLE = 1.0,
    DOUBLE = 2.0,
    TRIPLE = 3.0,
}

export enum CloudinaryImageFormat {
    JPG = 'jpg',
    WEBP = 'webp',
}

export class CloudinaryImageService {
    private static readonly baseUrl = 'https://res.cloudinary.com/dbsjhw9tp/image/upload';

    static getImageUrl(name: string, format: CloudinaryImageFormat, density: CloudinaryImageDensity, width?: number, height?: number): string {
        const dprParameter = `dpr_${density.toFixed(1)}`
        const widthParameter = width ? `,h_${width}` : '';
        const heightParameter = height ? `,h_${height}` : '';
        return `${this.baseUrl}/c_scale,${dprParameter}${widthParameter}${heightParameter}/${name}.${format.toString()}`
    }
}
