import useQuery from "../api/useQuery";
// import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";
import DeleteButton from "./DeleteButton";
import Form from "./Form";

export default function ActivitiesPage() {  
  const {data} = useQuery("/activities", "activities");
  const activities = Array.isArray(data) ? data : [];
  const { token } = useAuth();

  if (!token) {
    return (
      <>
        <h1>Activities</h1>
        <ul>
        {activities.map((activity) => (
          <li
            key={activity.id}
          >
            {activity.name}
          </li>
        ))}
      </ul>
      </>
    )
  }

  return (
    <>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity) => (
          <li
            key={activity.id}
          >
            {activity.name}
            <br />
            <DeleteButton id={activity.id}></DeleteButton>
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}