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
export type DataExportProps = typeof __propDef.props;
export type DataExportEvents = typeof __propDef.events;
export type DataExportSlots = typeof __propDef.slots;
export default class DataExport extends SvelteComponentTyped<DataExportProps, DataExportEvents, DataExportSlots> {
}
export {};
