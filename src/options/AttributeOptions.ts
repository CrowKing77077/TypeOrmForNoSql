import { AttributeValueTransformer } from "./AttributeValueTransformer";

export const EntityAttributeType = [
  "string",
  "number",
  "bool",
  "binary",
  "list",
  "object",
] as const;
export type EntityAttributeType = (typeof EntityAttributeType)[number];

export interface EntityAttributeOptions {
  type: EntityAttributeType;
  /**
   * Specifies if column's value must be unique or not.
   */
  unique?: boolean;

  /**
   * Indicates if column's value can be set to NULL.
   */
  nullable?: boolean;

  /**
   * Default database value.
   */
  default?: any;

  /**
   * Column comment. Not supported by all database types.
   */
  comment?: string;

  /**
   * Specifies a value transformer that is to be used to (un)marshal
   * this column when reading or writing to the database.
   */
  transformer?: AttributeValueTransformer | AttributeValueTransformer[];
}
