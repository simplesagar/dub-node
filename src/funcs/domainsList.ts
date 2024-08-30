/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DubCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import { createPageIterator, haltIterator, PageIterator, Paginator } from "../types/operations.js";

/**
 * Retrieve a list of domains
 *
 * @remarks
 * Retrieve a list of domains associated with the authenticated workspace.
 */
export async function domainsList(
    client$: DubCore,
    request?: operations.ListDomainsRequest | undefined,
    options?: RequestOptions
): Promise<
    PageIterator<
        Result<
            operations.ListDomainsResponse,
            | errors.BadRequest
            | errors.Unauthorized
            | errors.Forbidden
            | errors.NotFound
            | errors.Conflict
            | errors.InviteExpired
            | errors.UnprocessableEntity
            | errors.RateLimitExceeded
            | errors.InternalServerError
            | SDKError
            | SDKValidationError
            | UnexpectedClientError
            | InvalidRequestError
            | RequestAbortedError
            | RequestTimeoutError
            | ConnectionError
        >
    >
> {
    const input$ = typeof request === "undefined" ? {} : request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ListDomainsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/domains")();

    const query$ = encodeFormQuery$({
        archived: payload$.archived,
        page: payload$.page,
        pageSize: payload$.pageSize,
        search: payload$.search,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const token$ = await extractSecurity(client$.options$.token);
    const security$ = token$ == null ? {} : { token: token$ };
    const context = {
        operationID: "listDomains",
        oAuth2Scopes: [],
        securitySource: client$.options$.token,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return haltIterator(requestRes);
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "403", "404", "409", "410", "422", "429", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return haltIterator(doResult);
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$, raw$] = await m$.match<
        operations.ListDomainsResponse,
        | errors.BadRequest
        | errors.Unauthorized
        | errors.Forbidden
        | errors.NotFound
        | errors.Conflict
        | errors.InviteExpired
        | errors.UnprocessableEntity
        | errors.RateLimitExceeded
        | errors.InternalServerError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ListDomainsResponse$inboundSchema, { key: "Result" }),
        m$.jsonErr(400, errors.BadRequest$inboundSchema),
        m$.jsonErr(401, errors.Unauthorized$inboundSchema),
        m$.jsonErr(403, errors.Forbidden$inboundSchema),
        m$.jsonErr(404, errors.NotFound$inboundSchema),
        m$.jsonErr(409, errors.Conflict$inboundSchema),
        m$.jsonErr(410, errors.InviteExpired$inboundSchema),
        m$.jsonErr(422, errors.UnprocessableEntity$inboundSchema),
        m$.jsonErr(429, errors.RateLimitExceeded$inboundSchema),
        m$.jsonErr(500, errors.InternalServerError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.ListDomainsResponse,
            | errors.BadRequest
            | errors.Unauthorized
            | errors.Forbidden
            | errors.NotFound
            | errors.Conflict
            | errors.InviteExpired
            | errors.UnprocessableEntity
            | errors.RateLimitExceeded
            | errors.InternalServerError
            | SDKError
            | SDKValidationError
            | UnexpectedClientError
            | InvalidRequestError
            | RequestAbortedError
            | RequestTimeoutError
            | ConnectionError
        >
    > => {
        const page = input$.page || 0;
        const nextPage = page + 1;

        if (!responseData) {
            return () => null;
        }

        const results = responseData;

        if (!Array.isArray(results) || !results.length) {
            return () => null;
        }
        const limit = input$.pageSize || 0;
        if (results.length < limit) {
            return () => null;
        }

        return () =>
            domainsList(
                client$,
                {
                    ...input$,
                    page: nextPage,
                },
                options
            );
    };

    const page$ = { ...result$, next: nextFunc(raw$) };
    return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}