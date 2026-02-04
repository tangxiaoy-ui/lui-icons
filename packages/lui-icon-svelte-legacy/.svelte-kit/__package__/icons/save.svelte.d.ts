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
export type SaveProps = typeof __propDef.props;
export type SaveEvents = typeof __propDef.events;
export type SaveSlots = typeof __propDef.slots;
export default class Save extends SvelteComponentTyped<SaveProps, SaveEvents, SaveSlots> {
}
export {};
