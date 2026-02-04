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
export type LikeProps = typeof __propDef.props;
export type LikeEvents = typeof __propDef.events;
export type LikeSlots = typeof __propDef.slots;
/**
 * @component @name Like
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41ODMwMSAwQzYuMzkxODggMCA3LjA0Nzg2IDAuNjU1OTk5IDcuMDQ3ODUgMS40NjE5MUw3LjA0MTk5IDEuNzc4MzJDNy4wMzQyNiAxLjk4NjY0IDcuMDE5MTggMi4xODk3MiA2Ljk5NzA3IDIuMzg4NjdDNi45NDYxMiAyLjg0NzE4IDYuODM1NjMgMy4zODM1OSA2LjY2Njk5IDRIOS4zODE4NEMxMC43NjI1IDQgMTEuODgxOCA1LjExOTI5IDExLjg4MTggNi41QzExLjg4MTggNi43MDkwOCAxMS44NTU2IDYuOTE3NTYgMTEuODAzNyA3LjEyMDEyTDExLjAzNjEgMTAuMTIwMUMxMC43NTI5IDExLjIyNjMgOS43NTYwOSAxMS45OTk5IDguNjE0MjYgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWNS41QzAgNC42NzE1NyAwLjY3MTU3MyA0IDEuNSA0SDIuMjgxMjVMMi40MjI4NSAzLjg0NjY4QzIuNzg4MjQgMy40MzU2NyAzLjEwNDk0IDMuMDE0NjUgMy4zNzIwNyAyLjU4MzAxTDMuNTYyNSAyLjI1Njg0QzMuNzcxNzUgMS44ODAxNyAzLjkyODMzIDEuNTE2MSA0LjAzMTI1IDEuMTY0MDZDNC4yMzI3NyAwLjQ3NDQ4OCA0Ljg2NDYxIDAuMDAwMTQzMjEgNS41ODMwMSAwWk01LjU4MzAxIDFDNS4zMDg4NiAxLjAwMDE0IDUuMDY3MTUgMS4xODExNiA0Ljk5MDIzIDEuNDQ0MzRDNC44NjU2NiAxLjg3MDQ2IDQuNjgxNjggMi4zMDM2NCA0LjQzNzUgMi43NDMxNkM0LjA2MDQ0IDMuNDIxODYgMy41Nzk3OCA0LjA3MjA2IDMgNC42OTYyOVYxMUg4LjYxNDI2QzkuMjk5MzMgMTAuOTk5OSA5Ljg5NzQ3IDEwLjUzNTcgMTAuMDY3NCA5Ljg3MjA3TDEwLjgzNSA2Ljg3MjA3QzEwLjg2NjEgNi43NTA1NCAxMC44ODE4IDYuNjI1NDUgMTAuODgxOCA2LjVDMTAuODgxOCA1LjY3MTU3IDEwLjIxMDMgNSA5LjM4MTg0IDVINi42NjUwNEM2LjU3NzEgNC45OTk4MyA2LjQ4OTE2IDQuOTg3OSA2LjQwNDMgNC45NjQ4NEM1Ljg3MTU4IDQuODE5ODMgNS41NTY5OCA0LjI3MDQ5IDUuNzAyMTUgMy43MzczQzUuODU4MTQgMy4xNjcxOSA1Ljk1ODMgMi42Nzk4NiA2LjAwMjkzIDIuMjc4MzJDNi4wMzIwNiAyLjAxNjEzIDYuMDQ3MDggMS43NDQ3MSA2LjA0Nzg1IDEuNDY5NzNMNi4wNDAwNCAxLjM4NDc3QzYuMDAwNTYgMS4xNjQyNSA1LjgxMDk3IDEgNS41ODMwMSAxWk0xLjUgNUMxLjIyMzg2IDUgMSA1LjIyMzg2IDEgNS41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDJWNUgxLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/like
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Like extends SvelteComponentTyped<LikeProps, LikeEvents, LikeSlots> {
}
export {};
