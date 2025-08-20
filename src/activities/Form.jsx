import useMutation from "../api/useMutation";

export default function Form() {
    const {mutate: add, error} = useMutation("POST", `/activities/`, ["activities"]);

    const submit = (FormData) => {
        const obj = {
            name: FormData.get("name"), 
            description: FormData.get("description"), 
        }
        console.log(obj);
        add(obj);
    }

    return (
        <form action={submit}>
            <h3>Add a new activity</h3>
            <label>
            Name 
            <input type="text" name="name" />
            </label>
            <label>
            Description
            <input type="text" name="description" />
            </label>
            <button>Add activity</button>
            {error ? <p>{error.message}</p> : null}
        </form>
    )
}
