export class CreateAdsDto {
  title: string;
  description?: string;
  start_date: Date;
  end_date: Date;
  target_url: string;
  placement: string;
  status: "active" | "inactive" | "expired"; // customize enum as needed
  view_count?: number;
}
