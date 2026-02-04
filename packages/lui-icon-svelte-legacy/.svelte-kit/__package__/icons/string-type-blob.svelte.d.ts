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
export type StringTypeBlobProps = typeof __propDef.props;
export type StringTypeBlobEvents = typeof __propDef.events;
export type StringTypeBlobSlots = typeof __propDef.slots;
export default class StringTypeBlob extends SvelteComponentTyped<StringTypeBlobProps, StringTypeBlobEvents, StringTypeBlobSlots> {
}
export {};
