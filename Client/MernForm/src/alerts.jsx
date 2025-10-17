import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
export function SuccessAlert() {
  return (
    <>
      <Alert>
        <CheckCircle2 />
        <AlertTitle>Hyy User !</AlertTitle>
        <AlertDescription>
          you account has create enjoy our service.
        </AlertDescription>
      </Alert>
    </>
  );
}
export function FailAlert({ alerts }) {
  console.log(alerts);

  return (
    <>
      {alerts.map((alert,key) => (
        <Alert variant={"destructive"} className={"m-2"} key={key}>
          <CheckCircle2 />
          <AlertTitle>Hyy User !</AlertTitle>
          <AlertDescription>{alert.msg}</AlertDescription>
        </Alert>
      ))}
    </>
  );
}
