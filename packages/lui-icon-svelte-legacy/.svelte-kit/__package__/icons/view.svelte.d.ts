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
export type ViewProps = typeof __propDef.props;
export type ViewEvents = typeof __propDef.events;
export type ViewSlots = typeof __propDef.slots;
export default class View extends SvelteComponentTyped<ViewProps, ViewEvents, ViewSlots> {
}
export {};
