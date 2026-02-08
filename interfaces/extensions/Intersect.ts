export type Intersect<T extends any[]> = T extends [infer F, ...infer R] ? F & Intersect<R> : unknown;
