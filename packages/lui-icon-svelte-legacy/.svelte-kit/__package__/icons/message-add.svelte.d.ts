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
export type MessageAddProps = typeof __propDef.props;
export type MessageAddEvents = typeof __propDef.events;
export type MessageAddSlots = typeof __propDef.slots;
export default class MessageAdd extends SvelteComponentTyped<MessageAddProps, MessageAddEvents, MessageAddSlots> {
}
export {};
