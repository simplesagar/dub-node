/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const InviteExpiredCode = {
    InviteExpired: "invite_expired",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type InviteExpiredCode = ClosedEnum<typeof InviteExpiredCode>;

export type InviteExpiredError = {
    /**
     * A short code indicating the error code returned.
     */
    code: InviteExpiredCode;
    /**
     * A human readable explanation of what went wrong.
     */
    message: string;
    /**
     * A link to our documentation with more details about this error code
     */
    docUrl?: string | undefined;
};

/**
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
 */
export type InviteExpiredData = {
    error: InviteExpiredError;
};

/**
 * This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
 */
export class InviteExpired extends Error {
    error: InviteExpiredError;

    /** The original data that was passed to this error instance. */
    data$: InviteExpiredData;

    constructor(err: InviteExpiredData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "InviteExpired";
    }
}

/** @internal */
export const InviteExpiredCode$inboundSchema: z.ZodNativeEnum<typeof InviteExpiredCode> =
    z.nativeEnum(InviteExpiredCode);

/** @internal */
export const InviteExpiredCode$outboundSchema: z.ZodNativeEnum<typeof InviteExpiredCode> =
    InviteExpiredCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteExpiredCode$ {
    /** @deprecated use `InviteExpiredCode$inboundSchema` instead. */
    export const inboundSchema = InviteExpiredCode$inboundSchema;
    /** @deprecated use `InviteExpiredCode$outboundSchema` instead. */
    export const outboundSchema = InviteExpiredCode$outboundSchema;
}

/** @internal */
export const InviteExpiredError$inboundSchema: z.ZodType<
    InviteExpiredError,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        code: InviteExpiredCode$inboundSchema,
        message: z.string(),
        doc_url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            doc_url: "docUrl",
        });
    });

/** @internal */
export type InviteExpiredError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};

/** @internal */
export const InviteExpiredError$outboundSchema: z.ZodType<
    InviteExpiredError$Outbound,
    z.ZodTypeDef,
    InviteExpiredError
> = z
    .object({
        code: InviteExpiredCode$outboundSchema,
        message: z.string(),
        docUrl: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            docUrl: "doc_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteExpiredError$ {
    /** @deprecated use `InviteExpiredError$inboundSchema` instead. */
    export const inboundSchema = InviteExpiredError$inboundSchema;
    /** @deprecated use `InviteExpiredError$outboundSchema` instead. */
    export const outboundSchema = InviteExpiredError$outboundSchema;
    /** @deprecated use `InviteExpiredError$Outbound` instead. */
    export type Outbound = InviteExpiredError$Outbound;
}

/** @internal */
export const InviteExpired$inboundSchema: z.ZodType<InviteExpired, z.ZodTypeDef, unknown> = z
    .object({
        error: z.lazy(() => InviteExpiredError$inboundSchema),
    })
    .transform((v) => {
        return new InviteExpired(v);
    });

/** @internal */
export type InviteExpired$Outbound = {
    error: InviteExpiredError$Outbound;
};

/** @internal */
export const InviteExpired$outboundSchema: z.ZodType<
    InviteExpired$Outbound,
    z.ZodTypeDef,
    InviteExpired
> = z
    .instanceof(InviteExpired)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.lazy(() => InviteExpiredError$outboundSchema),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InviteExpired$ {
    /** @deprecated use `InviteExpired$inboundSchema` instead. */
    export const inboundSchema = InviteExpired$inboundSchema;
    /** @deprecated use `InviteExpired$outboundSchema` instead. */
    export const outboundSchema = InviteExpired$outboundSchema;
    /** @deprecated use `InviteExpired$Outbound` instead. */
    export type Outbound = InviteExpired$Outbound;
}
