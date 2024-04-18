/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Analytics } from "./analytics";
import { Domains } from "./domains";
import { Links } from "./links";
import { Metatags } from "./metatags";
import { QRCodes } from "./qrcodes";
import { Tags } from "./tags";
import { Workspaces } from "./workspaces";

export class Dub extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _links?: Links;
    get links() {
        return (this._links ??= new Links(this.options$));
    }

    private _qrCodes?: QRCodes;
    get qrCodes() {
        return (this._qrCodes ??= new QRCodes(this.options$));
    }

    private _analytics?: Analytics;
    get analytics() {
        return (this._analytics ??= new Analytics(this.options$));
    }

    private _workspaces?: Workspaces;
    get workspaces() {
        return (this._workspaces ??= new Workspaces(this.options$));
    }

    private _tags?: Tags;
    get tags() {
        return (this._tags ??= new Tags(this.options$));
    }

    private _domains?: Domains;
    get domains() {
        return (this._domains ??= new Domains(this.options$));
    }

    private _metatags?: Metatags;
    get metatags() {
        return (this._metatags ??= new Metatags(this.options$));
    }
}