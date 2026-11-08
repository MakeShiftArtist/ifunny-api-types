/**
 * Pixel size of an image or video
 */
export interface Size {
    /**
     * Width (in pixels)
     */
    w: number;
    /**
     * Height (in pixels)
     */
    h: number;
}

/**
 * A color hex code without `#`
 * @example
 * '55ff00'
 */
export type HexCode = string;

/**
 * Conditional post type.\
 * `T` Conditional\
 * Returns `A` if `T` is true\
 * Returns `B` if `T` is false\
 * Returns `A|B` if T is neither true or false\
 * @example
 * class Foo<Ready extends boolean = boolean> {
 * 	bar: If<Ready, number, null>
 * 	isReady(): this is Foo<true> {
 *  }
 * }
 */
export type If<T extends boolean, A, B = null> = T extends true
    ? A
    : T extends false
      ? B
      : A | B;

/**
 * UNIX Epoch in seconds
 * ? For better accuracy, convert to milliseconds
 */
export type EpochSec = number;

/**
 * UNIX Epoch in milliseconds
 */
export type EpochMs = number;

/**
 * @example
 * interface Foo {
 * 	bar: 'baz',
 * 	spam: 'eggs',
 * 	waldo: 'fred'
 * }
 *
 * type BarOrSpamOrWaldo = ValueOf<Foo> // Expect 'baz'|'eggs'|'fred'
 * type Bar = ValueOf<Foo, 'bar'> // Expect 'baz'
 * type BarOrSpam = ValueOf<Foo, 'bar'|'spam'> // Expect 'baz'|'eggs'
 *
 */
export type ValueOf<T, K extends keyof T = keyof T> = T[K];

/**
 * Like {@link Pick}, but each key is made required
 * @example
 * interface Foo {
 * 	bar?: string
 * 	spam?: number
 * }
 *
 * type FooBar = Has<Foo, 'bar'>; // Expect { bar: string }
 * type FooBarOrSpam = Has<Foo, 'bar'|'spam'>; // Expect { bar: string; spam: number }
 */
export type Has<T, K extends keyof T> = { [P in K]-?: T[P] };

export type Primitive = string | number | boolean | null;

export type JSONValue = Primitive | JSONObject | JSONValue[];

/**
 * Represents a raw JSON Object
 */
export interface JSONObject {
    [key: string]: JSONValue;
    [index: number]: never;
}
