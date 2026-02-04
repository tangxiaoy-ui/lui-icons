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
export type UserExecutorProps = typeof __propDef.props;
export type UserExecutorEvents = typeof __propDef.events;
export type UserExecutorSlots = typeof __propDef.slots;
export default class UserExecutor extends SvelteComponentTyped<UserExecutorProps, UserExecutorEvents, UserExecutorSlots> {
}
export {};
