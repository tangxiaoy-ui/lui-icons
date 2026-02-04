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
export type KeysProps = typeof __propDef.props;
export type KeysEvents = typeof __propDef.events;
export type KeysSlots = typeof __propDef.slots;
export default class Keys extends SvelteComponentTyped<KeysProps, KeysEvents, KeysSlots> {
}
export {};
