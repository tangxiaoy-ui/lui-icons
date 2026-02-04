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
export type PageCodeProps = typeof __propDef.props;
export type PageCodeEvents = typeof __propDef.events;
export type PageCodeSlots = typeof __propDef.slots;
export default class PageCode extends SvelteComponentTyped<PageCodeProps, PageCodeEvents, PageCodeSlots> {
}
export {};
