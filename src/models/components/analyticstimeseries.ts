/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AnalyticsTimeseries = {
    /**
     * The starting timestamp of the interval
     */
    start: string;
    /**
     * The number of clicks in the interval
     */
    clicks?: number | undefined;
    /**
     * The number of leads in the interval
     */
    leads?: number | undefined;
    /**
     * The number of sales in the interval
     */
    sales?: number | undefined;
    /**
     * The total amount of sales in the interval
     */
    saleAmount?: number | undefined;
};

/** @internal */
export const AnalyticsTimeseries$inboundSchema: z.ZodType<
    AnalyticsTimeseries,
    z.ZodTypeDef,
    unknown
> = z.object({
    start: z.string(),
    clicks: z.number().default(0),
    leads: z.number().default(0),
    sales: z.number().default(0),
    saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsTimeseries$Outbound = {
    start: string;
    clicks: number;
    leads: number;
    sales: number;
    saleAmount: number;
};

/** @internal */
export const AnalyticsTimeseries$outboundSchema: z.ZodType<
    AnalyticsTimeseries$Outbound,
    z.ZodTypeDef,
    AnalyticsTimeseries
> = z.object({
    start: z.string(),
    clicks: z.number().default(0),
    leads: z.number().default(0),
    sales: z.number().default(0),
    saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsTimeseries$ {
    /** @deprecated use `AnalyticsTimeseries$inboundSchema` instead. */
    export const inboundSchema = AnalyticsTimeseries$inboundSchema;
    /** @deprecated use `AnalyticsTimeseries$outboundSchema` instead. */
    export const outboundSchema = AnalyticsTimeseries$outboundSchema;
    /** @deprecated use `AnalyticsTimeseries$Outbound` instead. */
    export type Outbound = AnalyticsTimeseries$Outbound;
}
