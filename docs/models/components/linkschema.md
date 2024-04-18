# LinkSchema


## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The unique ID of the short link.                                                                                                                                                                                             |
| `domain`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains).                                                                              |
| `key`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The short link slug. If not provided, a random 7-character slug will be generated.                                                                                                                                           |
| `url`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The destination URL of the short link.                                                                                                                                                                                       |
| `archived`                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Whether the short link is archived.                                                                                                                                                                                          |
| `expiresAt`                                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                           | The date and time when the short link will expire in ISO-8601 format.                                                                                                                                                        |
| `expiredUrl`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The URL to redirect to when the short link has expired.                                                                                                                                                                      |
| `password`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The password required to access the destination URL of the short link.                                                                                                                                                       |
| `proxy`                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Whether the short link uses Custom Social Media Cards feature.                                                                                                                                                               |
| `title`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The title of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.                                                                                              |
| `description`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The description of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.                                                                                        |
| `image`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The image of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.                                                                                              |
| `rewrite`                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Whether the short link uses link cloaking.                                                                                                                                                                                   |
| `ios`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The iOS destination URL for the short link for iOS device targeting.                                                                                                                                                         |
| `android`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The Android destination URL for the short link for Android device targeting.                                                                                                                                                 |
| `geo`                                                                                                                                                                                                                        | [components.Geo](../../models/components/geo.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                           | Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`. Learn more: https://d.to/geo                                                                                                |
| `publicStats`                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                           | Whether the short link's stats are publicly accessible.                                                                                                                                                                      |
| ~~`tagId`~~                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The unique ID of the tag assigned to the short link. This field is deprecated – use `tags` instead. |
| `tags`                                                                                                                                                                                                                       | [components.TagSchema](../../models/components/tagschema.md)[]                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                           | The tags assigned to the short link.                                                                                                                                                                                         |
| `comments`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The comments for the short link.                                                                                                                                                                                             |
| `shortLink`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The full URL of the short link, including the https protocol (e.g. `https://dub.sh/try`).                                                                                                                                    |
| `qrCode`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The full URL of the QR code for the short link (e.g. `https://api.dub.co/qr?url=https://dub.sh/try`).                                                                                                                        |
| `utmSource`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UTM source of the short link.                                                                                                                                                                                            |
| `utmMedium`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UTM medium of the short link.                                                                                                                                                                                            |
| `utmCampaign`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UTM campaign of the short link.                                                                                                                                                                                          |
| `utmTerm`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UTM term of the short link.                                                                                                                                                                                              |
| `utmContent`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UTM content of the short link.                                                                                                                                                                                           |
| `userId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The user ID of the creator of the short link.                                                                                                                                                                                |
| `workspaceId`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The workspace ID of the short link.                                                                                                                                                                                          |
| `clicks`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | The number of clicks on the short link.                                                                                                                                                                                      |
| `lastClicked`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The date and time when the short link was last clicked.                                                                                                                                                                      |
| `createdAt`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The date and time when the short link was created.                                                                                                                                                                           |
| `updatedAt`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The date and time when the short link was last updated.                                                                                                                                                                      |
| ~~`projectId`~~                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The project ID of the short link. This field is deprecated – use `workspaceId` instead.     |