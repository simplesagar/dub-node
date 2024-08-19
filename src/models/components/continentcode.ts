/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The continent to retrieve analytics for.
 */
export const ContinentCode = {
    Af: "AF",
    An: "AN",
    As: "AS",
    Eu: "EU",
    Na: "NA",
    Oc: "OC",
    Sa: "SA",
} as const;
/**
 * The continent to retrieve analytics for.
 */
export type ContinentCode = ClosedEnum<typeof ContinentCode>;

/** @internal */
export const ContinentCode$inboundSchema: z.ZodNativeEnum<typeof ContinentCode> =
    z.nativeEnum(ContinentCode);

/** @internal */
export const ContinentCode$outboundSchema: z.ZodNativeEnum<typeof ContinentCode> =
    ContinentCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContinentCode$ {
    /** @deprecated use `ContinentCode$inboundSchema` instead. */
    export const inboundSchema = ContinentCode$inboundSchema;
    /** @deprecated use `ContinentCode$outboundSchema` instead. */
    export const outboundSchema = ContinentCode$outboundSchema;
}