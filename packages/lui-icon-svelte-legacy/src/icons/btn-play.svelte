<script lang="ts">
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

import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

type $$Props = IconProps;

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6Z","fill":"#666666"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 3.46713C4 3.31906 4.04383 3.1743 4.12596 3.0511L4.19421 2.9634C4.43939 2.69219 4.85271 2.63421 5.16603 2.84309L8.96533 5.37596C9.04772 5.43089 9.11842 5.50158 9.17334 5.58397C9.40311 5.92862 9.30998 6.39427 8.96533 6.62404L5.16603 9.15691C5.04282 9.23904 4.89807 9.28287 4.75 9.28287C4.33579 9.28287 4 8.94708 4 8.53287V3.46713ZM8.097 6L5 3.934V8.065L8.097 6Z","fill":"#666666"}]];

/**
 * @component @name BtnPlay
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDMuNDY3MTNDNCAzLjMxOTA2IDQuMDQzODMgMy4xNzQzIDQuMTI1OTYgMy4wNTExTDQuMTk0MjEgMi45NjM0QzQuNDM5MzkgMi42OTIxOSA0Ljg1MjcxIDIuNjM0MjEgNS4xNjYwMyAyLjg0MzA5TDguOTY1MzMgNS4zNzU5NkM5LjA0NzcyIDUuNDMwODkgOS4xMTg0MiA1LjUwMTU4IDkuMTczMzQgNS41ODM5N0M5LjQwMzExIDUuOTI4NjIgOS4zMDk5OCA2LjM5NDI3IDguOTY1MzMgNi42MjQwNEw1LjE2NjAzIDkuMTU2OTFDNS4wNDI4MiA5LjIzOTA0IDQuODk4MDcgOS4yODI4NyA0Ljc1IDkuMjgyODdDNC4zMzU3OSA5LjI4Mjg3IDQgOC45NDcwOCA0IDguNTMyODdWMy40NjcxM1pNOC4wOTcgNkw1IDMuOTM0VjguMDY1TDguMDk3IDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/btn-play
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="btn-play" {...$$props} iconNode={iconNode}>
  <slot/>
</Icon>
