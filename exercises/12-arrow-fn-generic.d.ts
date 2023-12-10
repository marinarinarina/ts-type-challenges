declare module 'stats' {
    export type CompareFunction<T> = (a: T, b: T) => number;
    export type GetIndex = <T>(input: T[], comparator: CompareFunction<T>) => number;

    export const getMaxIndex: GetIndex;
    export const getMedianIndex: GetIndex;
    export const getMinIndex: GetIndex;

    export type GetElement = <T>(input: T[], comparator: CompareFunction<T>) => T | null;

    export const getMinElement: GetElement;
    export const getMaxElement: GetElement;
    export const getMedianElement: GetElement;
    
    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
}
