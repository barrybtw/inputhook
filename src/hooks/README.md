# inputhook

Simple React Hook made for binding a state, resetfunction and bindvalue to an input.

## Usage/Examples

```javascript
import useInput from "@barrybtw/inputhook";

const InputExample = () => {
  const [name, nameBinding, nameReset] = useInput("");

  const handleSubmitEvent = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(name); // Logs the value of the input at the time.
    nameReset(); // Resets the input field and state
  };

  return (
    <form onSubmit={handleSubmitEvent}>
      <label>First Name</label>
      <input {...nameBinding} placeholder={"Begin writing..."} />
    </form>
  );
};
```
