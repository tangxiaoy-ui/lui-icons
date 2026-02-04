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
export type EmoticonProps = typeof __propDef.props;
export type EmoticonEvents = typeof __propDef.events;
export type EmoticonSlots = typeof __propDef.slots;
export default class Emoticon extends SvelteComponentTyped<EmoticonProps, EmoticonEvents, EmoticonSlots> {
}
export {};
