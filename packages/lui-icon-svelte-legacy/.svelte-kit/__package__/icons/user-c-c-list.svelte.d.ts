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
export type UserCCListProps = typeof __propDef.props;
export type UserCCListEvents = typeof __propDef.events;
export type UserCCListSlots = typeof __propDef.slots;
export default class UserCCList extends SvelteComponentTyped<UserCCListProps, UserCCListEvents, UserCCListSlots> {
}
export {};
