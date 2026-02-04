/**
 * @license lui-icon-svelte-legacy v0.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2024, Tubiao Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
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
export type MeetingRoomProps = typeof __propDef.props;
export type MeetingRoomEvents = typeof __propDef.events;
export type MeetingRoomSlots = typeof __propDef.slots;
/**
 * @component @name MeetingRoom
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMUMxMS41NTIzIDEgMTIgMS40NDc3MiAxMiAyVjhDMTIgOC41NTIyOCAxMS41NTIzIDkgMTEgOUg2LjkwMTM3TDkuMjc3MzQgMTAuNTg0TDguNzIyNjYgMTEuNDE2TDYuMDU1NjYgOS42Mzc3QzYuMDMzMjcgOS42MjI3NyA2LjAwNTg4IDkuNjE4MDcgNS45ODA0NyA5LjYyMzA1TDUuOTQ0MzQgOS42Mzc3TDMuMjc3MzQgMTEuNDE2TDIuNzIyNjYgMTAuNTg0TDUuMDk4NjMgOUgxQzAuNDQ3NzE1IDkgMCA4LjU1MjI4IDAgOFYyQzAgMS40NDc3MiAwLjQ0NzcxNSAxIDEgMUgxMVpNMSA4SDExVjJIMVY4Wk05LjI5NDkyIDQuNDA0M0w3LjA2NzM4IDYuMDI4MzJDNi44MjI3NCA2LjIwNjcxIDYuNTAxMjUgNi4yMzAwMSA2LjIzNjMzIDYuMDk2NjhMNi4xMzk2NSA2LjAzOTA2TDQuODI3MTUgNS4xMjc5M0wzLjMyMDMxIDYuMzgzNzlMMi42Nzk2OSA1LjYxNjIxTDQuMzA0NjkgNC4yNjE3MkM0LjU1MDQgNC4wNTcyMSA0Ljg5MDgxIDQuMDIwNzEgNS4xNzA5IDQuMTU5MThMNS4yNzI0NiA0LjIxOTczTDYuNTkxOCA1LjEzNTc0TDguNzA1MDggMy41OTU3TDkuMjk0OTIgNC40MDQzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/meeting-room
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class MeetingRoom extends SvelteComponentTyped<MeetingRoomProps, MeetingRoomEvents, MeetingRoomSlots> {
}
export {};
