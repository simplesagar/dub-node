/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The tag IDs to filter the links by.
 */
export type QueryParamTagIds = string | Array<string>;

/**
 * The field to sort the links by. The default is `createdAt`, and sort order is always descending.
 */
export const Sort = {
    CreatedAt: "createdAt",
    Clicks: "clicks",
    LastClicked: "lastClicked",
} as const;
/**
 * The field to sort the links by. The default is `createdAt`, and sort order is always descending.
 */
export type Sort = (typeof Sort)[keyof typeof Sort];

export type GetLinksRequest = {
    /**
     * The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned.
     */
    domain?: string | undefined;
    /**
     * The tag ID to filter the links by. This field is deprecated – use `tagIds` instead.
     */
    tagId?: string | undefined;
    /**
     * The tag IDs to filter the links by.
     */
    tagIds?: string | Array<string> | undefined;
    /**
     * The search term to filter the links by. The search term will be matched against the short link slug and the destination url.
     */
    search?: string | undefined;
    /**
     * The user ID to filter the links by.
     */
    userId?: string | undefined;
    /**
     * Whether to include archived links in the response. Defaults to `false` if not provided.
     */
    showArchived?: boolean | undefined;
    /**
     * Whether to include tags in the response. Defaults to `false` if not provided.
     */
    withTags?: boolean | undefined;
    /**
     * The field to sort the links by. The default is `createdAt`, and sort order is always descending.
     */
    sort?: Sort | undefined;
    /**
     * The page number for pagination (each page contains 100 links).
     */
    page?: number | undefined;
};

/** @internal */
export namespace QueryParamTagIds$ {
    export type Inbound = string | Array<string>;

    export type Outbound = string | Array<string>;
    export const inboundSchema: z.ZodType<QueryParamTagIds, z.ZodTypeDef, Inbound> = z.union([
        z.string(),
        z.array(z.string()),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryParamTagIds> = z.union([
        z.string(),
        z.array(z.string()),
    ]);
}

/** @internal */
export const Sort$: z.ZodNativeEnum<typeof Sort> = z.nativeEnum(Sort);

/** @internal */
export namespace GetLinksRequest$ {
    export type Inbound = {
        domain?: string | undefined;
        tagId?: string | undefined;
        tagIds?: string | Array<string> | undefined;
        search?: string | undefined;
        userId?: string | undefined;
        showArchived?: boolean | undefined;
        withTags?: boolean | undefined;
        sort?: Sort | undefined;
        page?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetLinksRequest, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string().optional(),
            tagId: z.string().optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            search: z.string().optional(),
            userId: z.string().optional(),
            showArchived: z.boolean().default(false),
            withTags: z.boolean().default(false),
            sort: Sort$.default("createdAt"),
            page: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                showArchived: v.showArchived,
                withTags: v.withTags,
                sort: v.sort,
                ...(v.page === undefined ? null : { page: v.page }),
            };
        });

    export type Outbound = {
        domain?: string | undefined;
        tagId?: string | undefined;
        tagIds?: string | Array<string> | undefined;
        search?: string | undefined;
        userId?: string | undefined;
        showArchived: boolean;
        withTags: boolean;
        sort: Sort;
        page?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksRequest> = z
        .object({
            domain: z.string().optional(),
            tagId: z.string().optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            search: z.string().optional(),
            userId: z.string().optional(),
            showArchived: z.boolean().default(false),
            withTags: z.boolean().default(false),
            sort: Sort$.default("createdAt"),
            page: z.number().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.userId === undefined ? null : { userId: v.userId }),
                showArchived: v.showArchived,
                withTags: v.withTags,
                sort: v.sort,
                ...(v.page === undefined ? null : { page: v.page }),
            };
        });
}
