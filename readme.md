# Bootstrap 4 markup for [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)

## Usage

Import `Form` from `react-jsonschema-form-plugins-bs4` and use it in place of `Form` from `react-jsonschema-form`

```js
import Form from 'react-jsonschema-form-plugins-bs4'

class YourForm extends React.Component {
	render() {
		return <Form schema={schema} uiSchema={uiSchema} />
	}
}
```
