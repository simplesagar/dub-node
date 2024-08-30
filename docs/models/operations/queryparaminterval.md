# QueryParamInterval

The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.

## Example Usage

```typescript
import { QueryParamInterval } from "dub/models/operations";

let value: QueryParamInterval = "24h";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d" | "ytd" | "1y" | "all" | "all_unfiltered"
```