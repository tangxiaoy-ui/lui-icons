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

const iconNode: IconNode = [["path",{"d":"M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM9.38379 4.88379L6.2373 8.03027C5.87682 8.39072 5.30927 8.41829 4.91699 8.11328L4.82324 8.03027L3.17676 6.38379L3.88379 5.67676L5.53027 7.32324L8.67676 4.17676L9.38379 4.88379Z","fill":"#666666"}]];

/**
 * @component @name Tick
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTkuMzgzNzkgNC44ODM3OUw2LjIzNzMgOC4wMzAyN0M1Ljg3NjgyIDguMzkwNzIgNS4zMDkyNyA4LjQxODI5IDQuOTE2OTkgOC4xMTMyOEw0LjgyMzI0IDguMDMwMjdMMy4xNzY3NiA2LjM4Mzc5TDMuODgzNzkgNS42NzY3Nkw1LjUzMDI3IDcuMzIzMjRMOC42NzY3NiA0LjE3Njc2TDkuMzgzNzkgNC44ODM3OVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tick
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="tick" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
