import { Render } from "./Render";
import { users } from "./massiv";
import "./MapReact.css";

export function MapReact() {
  return (
    <div className="Dispaly">
      {users.map((user) => (
        <Render key={user.id} {...user} />
      ))}
    </div>
  );
}
