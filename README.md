# Angular Input Trim Space Directive

This directive trims whitespaces from all input fields [ type = text, textarea ].


## Usage

1.Install `input-trim-space`.

```bash
npm i -S input-trim-space
```

2.Import `InputTrimSpaceModule` to your Angular module.

**Angular 5+**

```typescript
import { InputTrimSpaceModule } from 'input-trim-space';
@NgModule({
  imports: [
    ...
    InputTrimSpaceModule,
    ...
  ],
  ...
```