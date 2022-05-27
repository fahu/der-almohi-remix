import type {CloudinaryImage} from "~/models/CloudinaryImage";
import {v2 as cloudinary} from 'cloudinary'

export class CloudinaryImageSearchService {
    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true
        });
    }

    public async searchForImagesInFolder(folder: string): Promise<CloudinaryImage[]> {
        const response = await cloudinary.search
            .expression(`folder:${folder}/*`)
            .with_field("context")
            .sort_by('filename', 'desc')
            .execute()

        return response.resources;
    }
}
