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
export type UserGroupProps = typeof __propDef.props;
export type UserGroupEvents = typeof __propDef.events;
export type UserGroupSlots = typeof __propDef.slots;
export default class UserGroup extends SvelteComponentTyped<UserGroupProps, UserGroupEvents, UserGroupSlots> {
}
export {};
