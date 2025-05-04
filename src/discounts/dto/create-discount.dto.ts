export class CreateDiscountDto {
  store_id: number;
  title: string;
  description?: string;
  discount_percent?: number;
  start_date: Date;
  end_date: Date;
  category_id: number;
  discount_value?: number;
  special_link?: string;
  is_active?: boolean;
  type_id: number;
}
