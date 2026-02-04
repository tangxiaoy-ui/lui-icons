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
export type DataImportProps = typeof __propDef.props;
export type DataImportEvents = typeof __propDef.events;
export type DataImportSlots = typeof __propDef.slots;
export default class DataImport extends SvelteComponentTyped<DataImportProps, DataImportEvents, DataImportSlots> {
}
export {};
