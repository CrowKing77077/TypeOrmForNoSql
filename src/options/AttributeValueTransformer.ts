export interface AttributeValueTransformer {
  to(value: any): any;
  from(value: any): any;
}
