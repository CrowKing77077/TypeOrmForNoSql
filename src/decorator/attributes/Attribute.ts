import {
  EntityAttributeOptions,
  EntityAttributeType,
} from "../../options/AttributeOptions";

export function EntityAttribute(
  options: EntityAttributeOptions
): PropertyDecorator {
  return function (object: Object, propertyName: string) {
    if (!options) options = {} as EntityAttributeOptions;

    const type: EntityAttributeType = options.type;
    if (!type) {
      throw new Error(
        `EntityAttribute type is required for property ${propertyName}`
      );
    }

    // if type is not given explicitly then try to guess it
    const reflectMetadataType =
      Reflect && (Reflect as any).getMetadata
        ? (Reflect as any).getMetadata("design:type", object, propertyName)
        : undefined;
    console.log(reflectMetadataType);
  };
}
