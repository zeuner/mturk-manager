import { computed, ComputedRef } from '@vue/composition-api';
import type { Entity } from '@/modules/app/entity/entity.model';

export function useModelWrapper({
  props,
  emit,
  name = 'modelValue',
  isEntity = false,
  entities = {},
}: {
  props: Record<string, Entity | Entity[]>;
  // TODO is the unknown required?
  // props: Record<string, Entity | Entity[] | unknown>;
  emit: (event: string, ...args: unknown[]) => void;
  name: string;
  isEntity?: boolean;
  entities?: Record<string, unknown>;
}): ComputedRef {
  return computed({
    get: () => {
      if (isEntity === true) {
        if (Array.isArray(props[name])) {
          return (props[name] as Entity[]).map((entity: Entity) => entity.id);
        }
        return (props[name] as Entity)?.id;
      }
      return props[name];
    },
    set: (value) => {
      if (isEntity === true) {
        if (Array.isArray(value)) {
          emit(
            `update:${name}`,
            value.map((val: string) => ({ id: val })),
          );
        } else {
          emit(`update:${name}`, entities[value as string]);
        }
      } else {
        emit(`update:${name}`, value);
      }
    },
  });
}

export function setDefaultIfNullOrUndefined<T>(value: T | undefined, defaultValue: T): T {
  if (value === undefined || value === null) {
    return defaultValue as T;
  }
  return value;
}

const FUNCTIONS_TYPE = [
  { type: 'string', func: (value: unknown) => typeof value === 'string' },
  { type: 'number', func: (value: unknown) => typeof value === 'number' },
  { type: 'null', func: (value: unknown) => value === null },
  { type: 'undefined', func: (value: unknown) => value === undefined },
];

export function getValidator(
  types: {string?: boolean, number?: boolean, null?: boolean, undefined?: boolean},
): (value: unknown) => boolean {
  const validations = FUNCTIONS_TYPE
    .reduce((arr, value) => {
      if (types[value.type as never] === true) {
        arr.push(value.func);
      }
      return arr;
    }, [] as ((value: unknown) => boolean)[]);

  // return (value) => validations.some((func) => func(value));
  return (value) => { console.warn(value, typeof value, validations, 'value'); return validations.some((func) => func(value)); };
}

export function toNumber(value: string): number | string {
  const n = parseFloat(value);
  return Number.isNaN(n) ? value : n;
}