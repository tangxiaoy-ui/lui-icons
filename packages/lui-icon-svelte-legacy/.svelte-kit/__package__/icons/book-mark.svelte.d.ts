import { SvelteComponentTyped } from "svelte";
import type { IconProps } from '../types.js';
declare const __propDef: {
    props: IconProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BookMarkProps = typeof __propDef.props;
export type BookMarkEvents = typeof __propDef.events;
export type BookMarkSlots = typeof __propDef.slots;
export default class BookMark extends SvelteComponentTyped<BookMarkProps, BookMarkEvents, BookMarkSlots> {
}
export {};
