/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type TrackLeadGlobals = {
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

export type TrackLeadRequestBody = {
    /**
     * The ID of the click in th Dub. You can read this value from `dclid` cookie.
     */
    clickId: string;
    /**
     * The name of the event to track.
     */
    eventName: string;
    /**
     * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
     */
    customerId: string;
    /**
     * Name of the customer in the client's app.
     */
    customerName?: string | null | undefined;
    /**
     * Email of the customer in the client's app.
     */
    customerEmail?: string | null | undefined;
    /**
     * Avatar of the customer in the client's app.
     */
    customerAvatar?: string | null | undefined;
    /**
     * Additional metadata to be stored with the lead event
     */
    metadata?: { [k: string]: any } | null | undefined;
};

/**
 * A lead was tracked.
 */
export type TrackLeadResponseBody = {
    clickId: string;
    eventName: string;
    customerId: string;
    customerName: string | null;
    customerEmail: string | null;
    customerAvatar: string | null;
    metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export namespace TrackLeadGlobals$ {
    export const inboundSchema: z.ZodType<TrackLeadGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackLeadGlobals> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });
}

/** @internal */
export namespace TrackLeadRequestBody$ {
    export const inboundSchema: z.ZodType<TrackLeadRequestBody, z.ZodTypeDef, unknown> = z.object({
        clickId: z.string(),
        eventName: z.string(),
        customerId: z.string(),
        customerName: z.nullable(z.string()).optional(),
        customerEmail: z.nullable(z.string()).optional(),
        customerAvatar: z.nullable(z.string()).optional(),
        metadata: z.nullable(z.record(z.any())).optional(),
    });

    export type Outbound = {
        clickId: string;
        eventName: string;
        customerId: string;
        customerName?: string | null | undefined;
        customerEmail?: string | null | undefined;
        customerAvatar?: string | null | undefined;
        metadata?: { [k: string]: any } | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackLeadRequestBody> = z.object(
        {
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.nullable(z.string()).optional(),
            customerEmail: z.nullable(z.string()).optional(),
            customerAvatar: z.nullable(z.string()).optional(),
            metadata: z.nullable(z.record(z.any())).optional(),
        }
    );
}

/** @internal */
export namespace TrackLeadResponseBody$ {
    export const inboundSchema: z.ZodType<TrackLeadResponseBody, z.ZodTypeDef, unknown> = z.object({
        clickId: z.string(),
        eventName: z.string(),
        customerId: z.string(),
        customerName: z.nullable(z.string()),
        customerEmail: z.nullable(z.string()),
        customerAvatar: z.nullable(z.string()),
        metadata: z.record(z.any()).optional(),
    });

    export type Outbound = {
        clickId: string;
        eventName: string;
        customerId: string;
        customerName: string | null;
        customerEmail: string | null;
        customerAvatar: string | null;
        metadata?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackLeadResponseBody> =
        z.object({
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.nullable(z.string()),
            customerEmail: z.nullable(z.string()),
            customerAvatar: z.nullable(z.string()),
            metadata: z.record(z.any()).optional(),
        });
}