import { TableMetadataArgs } from "./TableMetadataArgs";

export class MetadataArgsStorage {
  readonly tables: TableMetadataArgs[] = [];
  readonly uniques: UniqueMetadataArgs[] = [];

  readonly columns: ColumnMetadataArgs[] = [];
  readonly generations: GeneratedMetadataArgs[] = [];
}
