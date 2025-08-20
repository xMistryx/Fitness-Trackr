import useMutation from "../api/useMutation";

export default function DeleteButton({id}) {
    const {mutate, error} = useMutation("DELETE", `/activities/${id}`, ["activities"]);
    

    const remove = () => {
        mutate();
    }
    console.log(error)
  return (
    <button onClick={remove}>{error ? error.message : "Delete"}</button>
  )
}
