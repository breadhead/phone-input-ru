# phone-input-ru

> formatting phone input with russian country code

### installation

`yarn add @breadhead/phone-input-ru`

### usage

```js
import PhoneInput from '@breadhead/phone-input-ru'

<PhoneInput name="phone" />
```

```ts
interface Props {
  name: string
  className?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  required?: boolean
  autoFocus?: boolean
}
```
