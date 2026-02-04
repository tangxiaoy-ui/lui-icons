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
export type FilePendingProps = typeof __propDef.props;
export type FilePendingEvents = typeof __propDef.events;
export type FilePendingSlots = typeof __propDef.slots;
export default class FilePending extends SvelteComponentTyped<FilePendingProps, FilePendingEvents, FilePendingSlots> {
}
export {};
