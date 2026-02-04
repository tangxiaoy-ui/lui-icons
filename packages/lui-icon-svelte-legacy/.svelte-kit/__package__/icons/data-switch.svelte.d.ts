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
export type DataSwitchProps = typeof __propDef.props;
export type DataSwitchEvents = typeof __propDef.events;
export type DataSwitchSlots = typeof __propDef.slots;
export default class DataSwitch extends SvelteComponentTyped<DataSwitchProps, DataSwitchEvents, DataSwitchSlots> {
}
export {};
