/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DomainSchema = {
    /**
     * The unique identifier of the domain.
     */
    id: string;
    /**
     * The domain name.
     */
    slug: string;
    /**
     * Whether the domain is verified.
     */
    verified?: boolean | undefined;
    /**
     * Whether the domain is the primary domain for the workspace.
     */
    primary?: boolean | undefined;
    /**
     * Whether the domain is archived.
     */
    archived?: boolean | undefined;
    /**
     * Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
     */
    placeholder?: string | undefined;
    /**
     * The URL to redirect to when a link under this domain has expired.
     */
    expiredUrl: string | null;
    /**
     * The date the domain was created.
     */
    createdAt: string;
    /**
     * The date the domain was last updated.
     */
    updatedAt: string;
};

/** @internal */
export const DomainSchema$inboundSchema: z.ZodType<DomainSchema, z.ZodTypeDef, unknown> = z.object({
    id: z.string(),
    slug: z.string(),
    verified: z.boolean().default(false),
    primary: z.boolean().default(false),
    archived: z.boolean().default(false),
    placeholder: z.string().default("https://dub.co/help/article/what-is-dub"),
    expiredUrl: z.nullable(z.string()),
    createdAt: z.string(),
    updatedAt: z.string(),
});

/** @internal */
export type DomainSchema$Outbound = {
    id: string;
    slug: string;
    verified: boolean;
    primary: boolean;
    archived: boolean;
    placeholder: string;
    expiredUrl: string | null;
    createdAt: string;
    updatedAt: string;
};

/** @internal */
export const DomainSchema$outboundSchema: z.ZodType<
    DomainSchema$Outbound,
    z.ZodTypeDef,
    DomainSchema
> = z.object({
    id: z.string(),
    slug: z.string(),
    verified: z.boolean().default(false),
    primary: z.boolean().default(false),
    archived: z.boolean().default(false),
    placeholder: z.string().default("https://dub.co/help/article/what-is-dub"),
    expiredUrl: z.nullable(z.string()),
    createdAt: z.string(),
    updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DomainSchema$ {
    /** @deprecated use `DomainSchema$inboundSchema` instead. */
    export const inboundSchema = DomainSchema$inboundSchema;
    /** @deprecated use `DomainSchema$outboundSchema` instead. */
    export const outboundSchema = DomainSchema$outboundSchema;
    /** @deprecated use `DomainSchema$Outbound` instead. */
    export type Outbound = DomainSchema$Outbound;
}
