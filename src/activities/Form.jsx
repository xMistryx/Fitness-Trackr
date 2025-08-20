import useMutation from "../api/useMutation";

export default function Form() {
    const {mutate: add} = useMutation("POST", `/activities/`, ["activities"]);

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
            <input type="text" name="name" required />
            </label>
            <label>
            Description
            <input type="text" name="description" required />
            </label>
            <button>Add activity</button>
        </form>
    )
}
