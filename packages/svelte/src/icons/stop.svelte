<script lang="ts">
/**
 * @license @lui-icon/svelte v0.1.0 - ISC
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

import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.5 1H9.5C10.3284 1 11 1.67157 11 2.5V9.5C11 10.3284 10.3284 11 9.5 11H2.5C1.67157 11 1 10.3284 1 9.5V2.5C1 1.67157 1.67157 1 2.5 1ZM9.5 2H2.5C2.22386 2 2 2.22386 2 2.5V9.5C2 9.77614 2.22386 10 2.5 10H9.5C9.77614 10 10 9.77614 10 9.5V2.5C10 2.22386 9.77614 2 9.5 2Z","fill":"#666666"}]];

/**
 * @component @name Stop
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSAxSDkuNUMxMC4zMjg0IDEgMTEgMS42NzE1NyAxMSAyLjVWOS41QzExIDEwLjMyODQgMTAuMzI4NCAxMSA5LjUgMTFIMi41QzEuNjcxNTcgMTEgMSAxMC4zMjg0IDEgOS41VjIuNUMxIDEuNjcxNTcgMS42NzE1NyAxIDIuNSAxWk05LjUgMkgyLjVDMi4yMjM4NiAyIDIgMi4yMjM4NiAyIDIuNVY5LjVDMiA5Ljc3NjE0IDIuMjIzODYgMTAgMi41IDEwSDkuNUM5Ljc3NjE0IDEwIDEwIDkuNzc2MTQgMTAgOS41VjIuNUMxMCAyLjIyMzg2IDkuNzc2MTQgMiA5LjUgMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/stop
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="stop" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
