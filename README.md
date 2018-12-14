# phone-input-ru

* formatting phone input with russian country code

### instalation

`yarn add @breadhead/phone-input-ru`

### using

```js
import PhoneInput from '@breadhead/phone-input-ru'

<PhoneInput name="phone" />
```

```ts
interface Props {
  name: string
  className?: string
  onChange?: (value) => void
  onBlur?: () => void
  onFocus?: () => void
  required?: boolean
  autoFocus?: boolean
}
```