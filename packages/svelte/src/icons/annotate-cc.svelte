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

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.67944 7.99649L5.02302 2.78126C5.36472 2.24828 6.0791 2.08986 6.61863 2.42741C6.76304 2.51776 6.88538 2.63861 6.97683 2.78126L10.3204 7.99649C10.6621 8.52947 10.5017 9.23518 9.96221 9.57274C9.77713 9.68853 9.56257 9.75 9.3435 9.75H2.65635C2.01772 9.75 1.5 9.23857 1.5 8.60769C1.5 8.39128 1.56223 8.17932 1.67944 7.99649ZM5.99993 3.39246L2.65635 8.60769H9.3435L5.99993 3.39246Z","fill":"#666666"}]];

/**
 * @component @name AnnotateCc
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNjc5NDQgNy45OTY0OUw1LjAyMzAyIDIuNzgxMjZDNS4zNjQ3MiAyLjI0ODI4IDYuMDc5MSAyLjA4OTg2IDYuNjE4NjMgMi40Mjc0MUM2Ljc2MzA0IDIuNTE3NzYgNi44ODUzOCAyLjYzODYxIDYuOTc2ODMgMi43ODEyNkwxMC4zMjA0IDcuOTk2NDlDMTAuNjYyMSA4LjUyOTQ3IDEwLjUwMTcgOS4yMzUxOCA5Ljk2MjIxIDkuNTcyNzRDOS43NzcxMyA5LjY4ODUzIDkuNTYyNTcgOS43NSA5LjM0MzUgOS43NUgyLjY1NjM1QzIuMDE3NzIgOS43NSAxLjUgOS4yMzg1NyAxLjUgOC42MDc2OUMxLjUgOC4zOTEyOCAxLjU2MjIzIDguMTc5MzIgMS42Nzk0NCA3Ljk5NjQ5Wk01Ljk5OTkzIDMuMzkyNDZMMi42NTYzNSA4LjYwNzY5SDkuMzQzNUw1Ljk5OTkzIDMuMzkyNDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/annotate-cc
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="annotate-cc" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
