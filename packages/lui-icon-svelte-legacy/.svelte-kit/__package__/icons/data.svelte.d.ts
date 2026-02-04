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
export type DataProps = typeof __propDef.props;
export type DataEvents = typeof __propDef.events;
export type DataSlots = typeof __propDef.slots;
export default class Data extends SvelteComponentTyped<DataProps, DataEvents, DataSlots> {
}
export {};
