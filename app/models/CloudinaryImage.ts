export interface CloudinaryImage {
  asset_id: string;
  folder: string;
  public_id: string;
  created_at: string;
  secure_url: string;
  context?: {
    alt: string;
    caption: string;
  };
}
