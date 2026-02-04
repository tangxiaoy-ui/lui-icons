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
export type FileAddProps = typeof __propDef.props;
export type FileAddEvents = typeof __propDef.events;
export type FileAddSlots = typeof __propDef.slots;
export default class FileAdd extends SvelteComponentTyped<FileAddProps, FileAddEvents, FileAddSlots> {
}
export {};
