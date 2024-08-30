/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const SaleEventEvent = {
    Sale: "sale",
} as const;
export type SaleEventEvent = ClosedEnum<typeof SaleEventEvent>;

export type SaleEvent = {
    event?: SaleEventEvent | undefined;
    timestamp: string;
    eventId: string;
    eventName: string;
    customerName: string;
    customerEmail: string;
    customerAvatar: string;
    paymentProcessor: string;
    invoiceId: string;
    saleAmount: number;
    clickId: string;
    linkId: string;
    domain: string;
    key: string;
    url: string;
    continent: string | null;
    country: string | null;
    city: string | null;
    device: string | null;
    browser: string | null;
    os: string | null;
    referer: string | null;
    qr: number | null;
    ip: string | null;
};

/** @internal */
export const SaleEventEvent$inboundSchema: z.ZodNativeEnum<typeof SaleEventEvent> =
    z.nativeEnum(SaleEventEvent);

/** @internal */
export const SaleEventEvent$outboundSchema: z.ZodNativeEnum<typeof SaleEventEvent> =
    SaleEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SaleEventEvent$ {
    /** @deprecated use `SaleEventEvent$inboundSchema` instead. */
    export const inboundSchema = SaleEventEvent$inboundSchema;
    /** @deprecated use `SaleEventEvent$outboundSchema` instead. */
    export const outboundSchema = SaleEventEvent$outboundSchema;
}

/** @internal */
export const SaleEvent$inboundSchema: z.ZodType<SaleEvent, z.ZodTypeDef, unknown> = z
    .object({
        event: SaleEventEvent$inboundSchema.default("sale"),
        timestamp: z.string(),
        event_id: z.string(),
        event_name: z.string(),
        customer_name: z.string(),
        customer_email: z.string(),
        customer_avatar: z.string(),
        payment_processor: z.string(),
        invoice_id: z.string(),
        saleAmount: z.number(),
        click_id: z.string(),
        link_id: z.string(),
        domain: z.string(),
        key: z.string(),
        url: z.string(),
        continent: z.nullable(z.string()),
        country: z.nullable(z.string()),
        city: z.nullable(z.string()),
        device: z.nullable(z.string()),
        browser: z.nullable(z.string()),
        os: z.nullable(z.string()),
        referer: z.nullable(z.string()),
        qr: z.nullable(z.number()),
        ip: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            event_id: "eventId",
            event_name: "eventName",
            customer_name: "customerName",
            customer_email: "customerEmail",
            customer_avatar: "customerAvatar",
            payment_processor: "paymentProcessor",
            invoice_id: "invoiceId",
            click_id: "clickId",
            link_id: "linkId",
        });
    });

/** @internal */
export type SaleEvent$Outbound = {
    event: string;
    timestamp: string;
    event_id: string;
    event_name: string;
    customer_name: string;
    customer_email: string;
    customer_avatar: string;
    payment_processor: string;
    invoice_id: string;
    saleAmount: number;
    click_id: string;
    link_id: string;
    domain: string;
    key: string;
    url: string;
    continent: string | null;
    country: string | null;
    city: string | null;
    device: string | null;
    browser: string | null;
    os: string | null;
    referer: string | null;
    qr: number | null;
    ip: string | null;
};

/** @internal */
export const SaleEvent$outboundSchema: z.ZodType<SaleEvent$Outbound, z.ZodTypeDef, SaleEvent> = z
    .object({
        event: SaleEventEvent$outboundSchema.default("sale"),
        timestamp: z.string(),
        eventId: z.string(),
        eventName: z.string(),
        customerName: z.string(),
        customerEmail: z.string(),
        customerAvatar: z.string(),
        paymentProcessor: z.string(),
        invoiceId: z.string(),
        saleAmount: z.number(),
        clickId: z.string(),
        linkId: z.string(),
        domain: z.string(),
        key: z.string(),
        url: z.string(),
        continent: z.nullable(z.string()),
        country: z.nullable(z.string()),
        city: z.nullable(z.string()),
        device: z.nullable(z.string()),
        browser: z.nullable(z.string()),
        os: z.nullable(z.string()),
        referer: z.nullable(z.string()),
        qr: z.nullable(z.number()),
        ip: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            eventId: "event_id",
            eventName: "event_name",
            customerName: "customer_name",
            customerEmail: "customer_email",
            customerAvatar: "customer_avatar",
            paymentProcessor: "payment_processor",
            invoiceId: "invoice_id",
            clickId: "click_id",
            linkId: "link_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SaleEvent$ {
    /** @deprecated use `SaleEvent$inboundSchema` instead. */
    export const inboundSchema = SaleEvent$inboundSchema;
    /** @deprecated use `SaleEvent$outboundSchema` instead. */
    export const outboundSchema = SaleEvent$outboundSchema;
    /** @deprecated use `SaleEvent$Outbound` instead. */
    export type Outbound = SaleEvent$Outbound;
}