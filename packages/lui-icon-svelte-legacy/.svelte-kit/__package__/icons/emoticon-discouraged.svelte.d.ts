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
export type EmoticonDiscouragedProps = typeof __propDef.props;
export type EmoticonDiscouragedEvents = typeof __propDef.events;
export type EmoticonDiscouragedSlots = typeof __propDef.slots;
export default class EmoticonDiscouraged extends SvelteComponentTyped<EmoticonDiscouragedProps, EmoticonDiscouragedEvents, EmoticonDiscouragedSlots> {
}
export {};
