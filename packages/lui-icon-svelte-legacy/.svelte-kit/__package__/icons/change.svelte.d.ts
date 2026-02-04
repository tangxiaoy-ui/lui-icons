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
export type ChangeProps = typeof __propDef.props;
export type ChangeEvents = typeof __propDef.events;
export type ChangeSlots = typeof __propDef.slots;
export default class Change extends SvelteComponentTyped<ChangeProps, ChangeEvents, ChangeSlots> {
}
export {};
