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
export type ReleaseProps = typeof __propDef.props;
export type ReleaseEvents = typeof __propDef.events;
export type ReleaseSlots = typeof __propDef.slots;
/**
 * @component @name Release
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMzYxMiAwLjEzMDA5OEMxMS43MzczIDAuMTgxNDUyIDEyLjAwMDMgMC41MjgzNzQgMTEuOTQ5IDAuOTA0NTEyTDEwLjUzNSAxMS4yNzg1QzEwLjUyMTcgMTEuMzc2IDEwLjQ4NjkgMTEuNDY5OCAxMC40MzQ0IDExLjU1MjlDMTAuMjMxNiAxMS44NzM4IDkuODA3MDkgMTEuOTY5NSA5LjQ4NjE1IDExLjc2NjhMNi42ODkyOCAxMC4wMDAySDIuOTUyOTVDMi41NzMzMyAxMC4wMDAyIDIuMjY1NTcgOS42OTIzMSAyLjI2NTQ1IDkuMzEyNzFDMi4yNjU0NSA5LjE2NjkyIDIuMzExODQgOS4wMjU5NyAyLjM5NjMxIDguOTA5MzlMMi40NjY2MiA4LjgyNjM5TDMuMzgxNjYgNy45MTAzN0wwLjUyNjE5MyA2LjEwNzY0QzAuNDEzMTk1IDYuMDM2MTEgMC4zMjI3ODYgNS45MzM0OCAwLjI2NzQwNCA1LjgxMTc0QzAuMTEwNDAyIDUuNDY2MTMgMC4yNjM2MyA1LjA1NzcyIDAuNjA5MjAxIDQuOTAwNjFMMTAuOTgzMiAwLjE4NTc2MkMxMS4xMDEyIDAuMTMyMTE4IDExLjIzMjcgMC4xMTI2MDkgMTEuMzYxMiAwLjEzMDA5OFpNNC45NzI0OCA3LjczMjY0TDYuOTc5MzIgOS4wMDAyMUg2Ljk5OTgzVjkuMDEyOTFMOS42MDkyIDEwLjY2MTNMMTAuODAyNiAxLjkwMzU0TDQuOTcyNDggNy43MzI2NFpNMy43MDU4OCA5LjAwMDIxSDUuMTA2MjdMNC4yNDc4NyA4LjQ1ODIyTDMuNzA1ODggOS4wMDAyMVpNMS41NDk2MyA1LjU3MDUzTDQuMTA2MjcgNy4xODU3Nkw5LjE5ODA3IDIuMDkzOTZMMS41NDk2MyA1LjU3MDUzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/release
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Release extends SvelteComponentTyped<ReleaseProps, ReleaseEvents, ReleaseSlots> {
}
export {};
