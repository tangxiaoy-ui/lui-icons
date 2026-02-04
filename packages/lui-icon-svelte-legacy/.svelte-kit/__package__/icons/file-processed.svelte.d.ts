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
export type FileProcessedProps = typeof __propDef.props;
export type FileProcessedEvents = typeof __propDef.events;
export type FileProcessedSlots = typeof __propDef.slots;
export default class FileProcessed extends SvelteComponentTyped<FileProcessedProps, FileProcessedEvents, FileProcessedSlots> {
}
export {};
