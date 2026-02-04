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
export type ImportProps = typeof __propDef.props;
export type ImportEvents = typeof __propDef.events;
export type ImportSlots = typeof __propDef.slots;
export default class Import extends SvelteComponentTyped<ImportProps, ImportEvents, ImportSlots> {
}
export {};
